import { CloseCircleFilled } from "@ant-design/icons";
import React, { useEffect, useRef, useState } from "react";
import { IGlobalUnit, mockGlobalUnits } from "../constant/globalUnits";
import { useRecoilState } from "recoil";
import { unitOptionState } from "../recoil/unitOptionRecoilState";

export const UnitPriceItem = ({ index, unitName, onRemove }: any) => {
  const [hasPrice, setHasPrice] = useState<boolean>();
  const [quantityValue, setQuantityValue] = useState<string>("");
  const [unitValue, setUnitValue] = useState<string>();
  const [isPlural, setIsPlural] = useState<boolean>();
  const [unitOption, setUnitOption] = useRecoilState<any>(unitOptionState);
  const [additionUnitOption, setAdditionUnitOption] = useState<any>([]);

  useEffect(() => {
    const isUnitValid = () => {
      return mockGlobalUnits.some((unit) => {
        return (
          unitValue === unit.unitNamePlural.singular ||
          unitValue === unit.unitNamePlural.plural
        );
      });
    };

    if (quantityValue && quantityValue !== "" && isUnitValid()) {
      const existingIndex = unitOption.findIndex(
        (item: any) => item.id === index
      );
      if (existingIndex !== -1) {
        setUnitOption((prev: any) => {
          const updatedTest = [...prev];
          updatedTest[existingIndex] = {
            ...updatedTest[existingIndex],
            option: `${unitName}(${quantityValue}${unitValue})`,
          };
          return updatedTest;
        });
      } else {
        setUnitOption((prev: any) => [
          ...prev,
          { id: index, option: `${unitName}(${quantityValue}${unitValue})` },
        ]);
      }
    } else {
      setUnitOption((prev: any) =>
        prev.filter((item: any) => item.id !== index)
      );
    }
  }, [quantityValue, unitValue]);

  useEffect(() => {
    setAdditionUnitOption(() =>
      unitOption.filter((item: any) => item.id !== index)
    );
  }, [unitOption]);

  const selectRef = useRef<any>(null);
  useEffect(() => {
    setUnitValue(selectRef?.current?.value);
  }, [isPlural]);

  const [priceValue, setPriceValue] = useState("");

  const handleChangePrice = (e: any) => {
    const userInput = e.target.value;
    const regex = /^[0-9.]*$/;
    if (regex.test(userInput)) {
      setPriceValue(userInput);
    }
  };
  useEffect(() => {
    priceValue !== "" ? setHasPrice(true) : setHasPrice(false);
  }, [priceValue]);

  const handleChangeQuantity = (e: any) => {
    const userInput = e.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(userInput)) {
      setQuantityValue(userInput);
    }
  };
  useEffect(() => {
    Number(quantityValue) > 1 ? setIsPlural(true) : setIsPlural(false);
  }, [quantityValue]);
  return (
    <div className="relative flex border border-b-0 border-solid border-gray-2 px-3 py-1 hover:bg-gray-3">
      <div className="flex-[4] font-medium flex items-center">{unitName}</div>
      <div className="flex-[5] font-medium flex items-center">
        <div className="w-1/2 flex justify-end">
          <input
            type="text"
            placeholder="Quantity"
            className="w-full text-end bg-transparent border border-transparent p-1"
            onChange={(e) => {
              handleChangeQuantity(e);
            }}
            value={quantityValue}
          />
        </div>
        <div className="w-1/2 pl-4 pr-2">
          <select
            id="measure-unit"
            className="w-full p-1 bg-transparent border border-transparent"
            defaultValue={"gram"}
            onChange={(e) => {
              setUnitValue(e.target.value);
            }}
            ref={selectRef}
          >
            {mockGlobalUnits.map((unit: IGlobalUnit) => {
              return (
                <option
                  key={unit.id}
                  value={
                    isPlural
                      ? unit.unitNamePlural.plural
                      : unit.unitNamePlural.singular
                  }
                >
                  {isPlural
                    ? unit.unitNamePlural.plural
                    : unit.unitNamePlural.singular}
                </option>
              );
            })}
            {additionUnitOption.map((unit: any) => {
              return (
                <option key={unit.id} value={unit.option}>
                  {unit.option}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="flex-[3] font-medium flex items-center pl-10 pr-4">
        <div className={`shrink-0 ${!hasPrice ? "text-gray-1" : ""}`}>$</div>
        <input
          type="text"
          placeholder="Price"
          className="w-full bg-transparent border border-transparent p-1"
          onChange={(e) => {
            handleChangePrice(e);
          }}
          value={priceValue}
        />
      </div>
      <div className="flex-[3] font-medium flex items-center">
        Active marketing
      </div>
      <div
        className="cursor-pointer absolute right-3 top-1/2 -translate-y-2/4"
        onClick={() => onRemove(index)}
      >
        <CloseCircleFilled className="hover:text-orange-1 transition-all duration-150" />
      </div>
    </div>
  );
};

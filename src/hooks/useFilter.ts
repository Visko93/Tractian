import { useEffect, useMemo, useState } from "react";
import { Asset, Filter, Location } from "@/utils/treeView/types";
import {debounce} from 'lodash';

interface UseFilterProps extends Filter {
    assets: Asset[];
    locations: Location[];
  }
  
  interface FilteredData {
    locations: Location[];
    assets: Asset[];
  }

  export function useFilter({ energySensor, criticalSensor, text, assets, locations }: UseFilterProps) {
    const [filteredData, setFilteredData] = useState<FilteredData>({ assets: [], locations: [] });
    const [isLoading, setIsLoading] = useState<boolean>(true);
  
    const debouncedFilter = useMemo(
      () => debounce((energySensor: boolean, criticalSensor: boolean, text: string) => {
        setIsLoading(true);
        filterData(energySensor, criticalSensor, text);
        setIsLoading(false);
      }, 300),
      []
    );
  
    useEffect(() => {
      debouncedFilter(energySensor, criticalSensor, text || '');
      return () => {
        debouncedFilter.cancel();
      };
    }, [energySensor, criticalSensor, text, assets, locations]);
  
    const filterData = (energySensor: boolean, criticalSensor: boolean, text: string) => {
      let filteredAssets = assets;
  
      if (criticalSensor) {
        filteredAssets = filteredAssets.filter((asset: Asset) => asset.status === 'critical');
      }
  
      if (energySensor) {
        filteredAssets = filteredAssets.filter((asset: Asset) => asset.sensorType === 'Energy');
      }
  
      if (text) {
        const lowercasedText = text.toLowerCase();
        filteredAssets = filteredAssets.filter((asset: Asset) => asset.name.toLowerCase().includes(lowercasedText));
      }
  
      const filteredLocations = locations.map((location: Location) => ({
        ...location,
        children: location.children?.filter((child) => {
          if ('sensorType' in child) {
            return filteredAssets.some((filteredAsset) => filteredAsset.id === child.id);
          }
          return true;
        }),
      }));
  
      setFilteredData({ assets: filteredAssets, locations: filteredLocations });
    };
  
    return { filteredData, isLoading };
  }
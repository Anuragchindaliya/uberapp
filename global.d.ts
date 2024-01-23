/// <reference types="nativewind/types" />

declare module "@env" {
  export const GOOGLE_API_KEY: string;
}

export declare type NativeStackScreenProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> = {
  navigation: NativeStackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
};

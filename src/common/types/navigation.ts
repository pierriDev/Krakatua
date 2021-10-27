export type Navigation = {
  navigate: (route: string, params?: any) => void;
  goBack: () => void;
};
export type Route = {
  params: any;
};

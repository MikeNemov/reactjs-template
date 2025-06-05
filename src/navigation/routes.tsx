export const routes: Route[] = [
  { path: '/', Component: LoginPage, title: 'Вход' },
  { path: '/home', Component: HomePage, title: 'Главная' },
  { path: '/init-data', Component: InitDataPage, title: 'Init Data' },
  { path: '/theme-params', Component: ThemeParamsPage, title: 'Theme Params' },
  { path: '/launch-params', Component: LaunchParamsPage, title: 'Launch Params' },
  {
    path: '/ton-connect',
    Component: TONConnectPage,
    title: 'TON Connect',
    icon: (
      <svg /* ... */ />
    ),
  },
  { path: '/add-contractor', Component: AddContractor, title: 'Добавить контрагента' },
];

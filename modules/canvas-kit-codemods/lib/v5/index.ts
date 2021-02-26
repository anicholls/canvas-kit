import {API, FileInfo} from 'jscodeshift';

const sourceMap: {
  [source: string]: string;
} = {
  // React
  '@workday/canvas-kit-react-action-bar': '@workday/canvas-kit-react/action-bar',
  '@workday/canvas-kit-react-avatar': '@workday/canvas-kit-react/avatar',
  '@workday/canvas-kit-react-badge': '@workday/canvas-kit-react/badge',
  '@workday/canvas-kit-react-banner': '@workday/canvas-kit-react/banner',
  '@workday/canvas-kit-react-button': '@workday/canvas-kit-react/button',
  '@workday/canvas-kit-react-card': '@workday/canvas-kit-react/card',
  '@workday/canvas-kit-react-checkbox': '@workday/canvas-kit-react/checkbox',
  '@workday/canvas-kit-react-color-picker': '@workday/canvas-kit-react/color-picker',
  '@workday/canvas-kit-react-common': '@workday/canvas-kit-react/common',
  '@workday/canvas-kit-react-cookie-banner': '@workday/canvas-kit-react/cookie-banner',
  '@workday/canvas-kit-react-core': '@workday/canvas-kit-react/core',
  '@workday/canvas-kit-react-form-field': '@workday/canvas-kit-react/form-field',
  '@workday/canvas-kit-react-icon': '@workday/canvas-kit-react/icon',
  '@workday/canvas-kit-react-layout': '@workday/canvas-kit-react/layout',
  '@workday/canvas-kit-react-loading-animation': '@workday/canvas-kit-react/loading-animation',
  '@workday/canvas-kit-react-modal': '@workday/canvas-kit-react/modal',
  '@workday/canvas-kit-react-page-header': '@workday/canvas-kit-react/page-header',
  '@workday/canvas-kit-react-popup': '@workday/canvas-kit-react/popup',
  '@workday/canvas-kit-react-radio': '@workday/canvas-kit-react/radio',
  '@workday/canvas-kit-react-segmented-control': '@workday/canvas-kit-react/segmented-control',
  '@workday/canvas-kit-react-select': '@workday/canvas-kit-react/select',
  '@workday/canvas-kit-react-side-panel': '@workday/canvas-kit-react/side-panel',
  '@workday/canvas-kit-react-skeleton': '@workday/canvas-kit-react/skeleton',
  '@workday/canvas-kit-react-status-indicator': '@workday/canvas-kit-react/status-indicator',
  '@workday/canvas-kit-react-switch': '@workday/canvas-kit-react/switch',
  '@workday/canvas-kit-react-table': '@workday/canvas-kit-react/table',
  '@workday/canvas-kit-react-text-area': '@workday/canvas-kit-react/text-area',
  '@workday/canvas-kit-react-text-input': '@workday/canvas-kit-react/text-input',
  '@workday/canvas-kit-react-toast': '@workday/canvas-kit-react/toast',
  '@workday/canvas-kit-react-tooltip': '@workday/canvas-kit-react/tooltip',

  // CSS
  '@workday/canvas-kit-css-action-bar': '@workday/canvas-kit-css/action-bar',
  '@workday/canvas-kit-css-badge': '@workday/canvas-kit-css/badge',
  '@workday/canvas-kit-css-banner': '@workday/canvas-kit-css/banner',
  '@workday/canvas-kit-css-button': '@workday/canvas-kit-css/button',
  '@workday/canvas-kit-css-card': '@workday/canvas-kit-css/card',
  '@workday/canvas-kit-css-checkbox': '@workday/canvas-kit-css/checkbox',
  '@workday/canvas-kit-css-common': '@workday/canvas-kit-css/common',
  '@workday/canvas-kit-css-core': '@workday/canvas-kit-css/core',
  '@workday/canvas-kit-css-form-field': '@workday/canvas-kit-css/form-field',
  '@workday/canvas-kit-css-icon': '@workday/canvas-kit-css/icon',
  '@workday/canvas-kit-css-layout': '@workday/canvas-kit-css/layout',
  '@workday/canvas-kit-css-loading-animation': '@workday/canvas-kit-css/loading-animation',
  '@workday/canvas-kit-css-menu': '@workday/canvas-kit-css/menu',
  '@workday/canvas-kit-css-modal': '@workday/canvas-kit-css/modal',
  '@workday/canvas-kit-css-page-header': '@workday/canvas-kit-css/page-header',
  '@workday/canvas-kit-css-popup': '@workday/canvas-kit-css/popup',
  '@workday/canvas-kit-css-radio': '@workday/canvas-kit-css/radio',
  '@workday/canvas-kit-css-select': '@workday/canvas-kit-css/select',
  '@workday/canvas-kit-css-table': '@workday/canvas-kit-css/table',
  '@workday/canvas-kit-css-text-area': '@workday/canvas-kit-css/text-area',
  '@workday/canvas-kit-css-text-input': '@workday/canvas-kit-css/text-input',
  '@workday/canvas-kit-css-tooltip': '@workday/canvas-kit-css/tooltip',

  // Labs
  '@workday/canvas-kit-labs-react-breadcrumbs': '@workday/canvas-kit-labs-react/breadcrumbs',
  '@workday/canvas-kit-labs-react-color-picker': '@workday/canvas-kit-labs-react/color-picker',
  '@workday/canvas-kit-labs-react-combobox': '@workday/canvas-kit-labs-react/combobox',
  '@workday/canvas-kit-labs-react-core': '@workday/canvas-kit-labs-react/core',
  '@workday/canvas-kit-labs-react-drawer': '@workday/canvas-kit-labs-react/drawer',
  '@workday/canvas-kit-labs-react-header': '@workday/canvas-kit-labs-react/header',
  '@workday/canvas-kit-labs-react-menu': '@workday/canvas-kit-labs-react/menu',
  '@workday/canvas-kit-labs-react-pagination': '@workday/canvas-kit-labs-react/pagination',
  '@workday/canvas-kit-labs-react-select': '@workday/canvas-kit-labs-react/select',
  '@workday/canvas-kit-labs-react-side-panel': '@workday/canvas-kit-labs-react/side-panel',
  '@workday/canvas-kit-labs-react-tabs': '@workday/canvas-kit-labs-react/tabs',
};

const bundleExportMap: {
  [_import: string]: string;
} = {
  canvas: '@workday/canvas-kit-react/core',
  ActionBar: '@workday/canvas-kit-react/action-bar',
  Avatar: '@workday/canvas-kit-react/avatar',
  AvatarVariant: '@workday/canvas-kit-react/avatar',
  CountBadge: '@workday/canvas-kit-react/badge',
  Banner: '@workday/canvas-kit-react/banner',
  BannerVariant: '@workday/canvas-kit-react/banner',
  Button: '@workday/canvas-kit-react/button',
  beta_Button: '@workday/canvas-kit-react/button',
  DeleteButton: '@workday/canvas-kit-react/button',
  deprecated_Button: '@workday/canvas-kit-react/button',
  DropdownButton: '@workday/canvas-kit-react/button',
  HighlightButton: '@workday/canvas-kit-react/button',
  OutlineButton: '@workday/canvas-kit-react/button',
  IconButton: '@workday/canvas-kit-react/button',
  TextButton: '@workday/canvas-kit-react/button',
  ToolbarIconButton: '@workday/canvas-kit-react/button',
  ToolbarDropdownButton: '@workday/canvas-kit-react/button',
  Hyperlink: '@workday/canvas-kit-react/button',
  ButtonVariant: '@workday/canvas-kit-react/button',
  ButtonIconPosition: '@workday/canvas-kit-react/button',
  ButtonSize: '@workday/canvas-kit-react/button',
  OutlineButtonVariant: '@workday/canvas-kit-react/button',
  DropdownButtonVariant: '@workday/canvas-kit-react/button',
  IconButtonVariant: '@workday/canvas-kit-react/button',
  TextButtonVariant: '@workday/canvas-kit-react/button',
  DeprecatedButtonVariant: '@workday/canvas-kit-react/button',
  Card: '@workday/canvas-kit-react/card',
  Checkbox: '@workday/canvas-kit-react/checkbox',
  ColorInput: '@workday/canvas-kit-react/color-picker',
  ColorPreview: '@workday/canvas-kit-react/color-picker',
  ColorSwatch: '@workday/canvas-kit-react/color-picker',
  dubLogoBlue: '@workday/canvas-kit-react/common',
  dubLogoWhite: '@workday/canvas-kit-react/common',
  wdayLogoBlue: '@workday/canvas-kit-react/common',
  wdayLogoWhite: '@workday/canvas-kit-react/common',
  miniWdayLogoBlue: '@workday/canvas-kit-react/common',
  ErrorType: '@workday/canvas-kit-react/common',
  BreakpointKey: '@workday/canvas-kit-react/common',
  breakpointKeys: '@workday/canvas-kit-react/common',
  breakpoints: '@workday/canvas-kit-react/common',
  up: '@workday/canvas-kit-react/common',
  down: '@workday/canvas-kit-react/common',
  between: '@workday/canvas-kit-react/common',
  only: '@workday/canvas-kit-react/common',
  createCanvasTheme: '@workday/canvas-kit-react/common',
  ContentDirection: '@workday/canvas-kit-react/common',
  styled: '@workday/canvas-kit-react/common',
  defaultCanvasTheme: '@workday/canvas-kit-react/common',
  useTheme: '@workday/canvas-kit-react/common',
  accessibleHide: '@workday/canvas-kit-react/common',
  getErrorColors: '@workday/canvas-kit-react/common',
  errorRing: '@workday/canvas-kit-react/common',
  memoizedFocusRing: '@workday/canvas-kit-react/common',
  focusRing: '@workday/canvas-kit-react/common',
  hideMouseFocus: '@workday/canvas-kit-react/common',
  mouseFocusBehavior: '@workday/canvas-kit-react/common',
  expandHex: '@workday/canvas-kit-react/common',
  pickForegroundColor: '@workday/canvas-kit-react/common',
  getTranslateFromOrigin: '@workday/canvas-kit-react/common',
  makeMq: '@workday/canvas-kit-react/common',
  mergeCallback: '@workday/canvas-kit-react/common',
  useUniqueId: '@workday/canvas-kit-react/common',
  uniqueId: '@workday/canvas-kit-react/common',
  CanvasProvider: '@workday/canvas-kit-react/common',
  CookieBanner: '@workday/canvas-kit-react/cookie-banner',
  FormField: '@workday/canvas-kit-react/form-field',
  Hint: '@workday/canvas-kit-react/form-field',
  Label: '@workday/canvas-kit-react/form-field',
  FormFieldLabelPosition: '@workday/canvas-kit-react/form-field',
  AccentIcon: '@workday/canvas-kit-react/icon',
  AppletIcon: '@workday/canvas-kit-react/icon',
  SystemIcon: '@workday/canvas-kit-react/icon',
  SystemIconCircle: '@workday/canvas-kit-react/icon',
  Graphic: '@workday/canvas-kit-react/icon',
  Svg: '@workday/canvas-kit-react/icon',
  accentIconStyles: '@workday/canvas-kit-react/icon',
  appletIconStyles: '@workday/canvas-kit-react/icon',
  systemIconStyles: '@workday/canvas-kit-react/icon',
  SystemIconCircleSize: '@workday/canvas-kit-react/icon',
  graphicStyles: '@workday/canvas-kit-react/icon',
  Layout: '@workday/canvas-kit-react/layout',
  Column: '@workday/canvas-kit-react/layout',
  LoadingAnimation: '@workday/canvas-kit-react/loading-animation',
  LoadingDots: '@workday/canvas-kit-react/loading-animation',
  Modal: '@workday/canvas-kit-react/modal',
  ModalWidth: '@workday/canvas-kit-react/modal',
  useModal: '@workday/canvas-kit-react/modal',
  PageHeader: '@workday/canvas-kit-react/page-header',
  Popup: '@workday/canvas-kit-react/popup',
  PopupPadding: '@workday/canvas-kit-react/popup',
  usePopup: '@workday/canvas-kit-react/popup',
  Popper: '@workday/canvas-kit-react/popup',
  useCloseOnEscape: '@workday/canvas-kit-react/popup',
  useFocusTrap: '@workday/canvas-kit-react/popup',
  useCloseOnOutsideClick: '@workday/canvas-kit-react/popup',
  usePopupStack: '@workday/canvas-kit-react/popup',
  useAssistiveHideSiblings: '@workday/canvas-kit-react/popup',
  useBringToTopOnClick: '@workday/canvas-kit-react/popup',
  getTransformFromPlacement: '@workday/canvas-kit-react/popup',
  Radio: '@workday/canvas-kit-react/radio',
  RadioGroup: '@workday/canvas-kit-react/radio',
  SegmentedControl: '@workday/canvas-kit-react/segmented-control',
  Select: '@workday/canvas-kit-react/select',
  SelectOption: '@workday/canvas-kit-react/select',
  SidePanel: '@workday/canvas-kit-react/side-panel',
  SidePanelOpenDirection: '@workday/canvas-kit-react/side-panel',
  SidePanelBackgroundColor: '@workday/canvas-kit-react/side-panel',
  Skeleton: '@workday/canvas-kit-react/skeleton',
  SkeletonText: '@workday/canvas-kit-react/skeleton',
  SkeletonHeader: '@workday/canvas-kit-react/skeleton',
  SkeletonShape: '@workday/canvas-kit-react/skeleton',
  BOTTOM_MARGIN: '@workday/canvas-kit-react/skeleton',
  StatusIndicator: '@workday/canvas-kit-react/status-indicator',
  StatusIndicatorType: '@workday/canvas-kit-react/status-indicator',
  StatusIndicatorEmphasis: '@workday/canvas-kit-react/status-indicator',
  statusIndicatorStyles: '@workday/canvas-kit-react/status-indicator',
  Switch: '@workday/canvas-kit-react/switch',
  Table: '@workday/canvas-kit-react/table',
  TableRow: '@workday/canvas-kit-react/table',
  borderWidth: '@workday/canvas-kit-react/table',
  borderColor: '@workday/canvas-kit-react/table',
  cellBorder: '@workday/canvas-kit-react/table',
  TableRowState: '@workday/canvas-kit-react/table',
  TextArea: '@workday/canvas-kit-react/text-area',
  TextAreaResizeDirection: '@workday/canvas-kit-react/text-area',
  InputIconContainer: '@workday/canvas-kit-react/text-input',
  TextInput: '@workday/canvas-kit-react/text-input',
  Toast: '@workday/canvas-kit-react/toast',
  Tooltip: '@workday/canvas-kit-react/tooltip',
  TooltipContainer: '@workday/canvas-kit-react/tooltip',
  useTooltip: '@workday/canvas-kit-react/tooltip',
};

export default function transformer(file: FileInfo, api: API) {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(_import => {
      if (_import.value.source.value === '@workday/canvas-kit-react') {
        // Create new imports as necessary based on bundleExportMap
        const newImports: {
          [source: string]: string[];
        } = {};

        _import.value.specifiers?.forEach(specifier => {
          // @ts-ignore
          const specifierName = specifier.imported.name;

          // Create new array of import specifiers for new import if not defined, otherwise push new import
          (newImports[bundleExportMap[specifierName]] =
            newImports[bundleExportMap[specifierName]] || []).push(specifierName);
        });

        j(_import).replaceWith(
          Object.keys(newImports).map(src => {
            return j.importDeclaration(
              newImports[src].map((identifier: string) =>
                j.importSpecifier(j.identifier(identifier))
              ),
              j.stringLiteral(src),
              'value'
            );
          })
        );
      }

      // @ts-ignore
      if (!Object.keys(sourceMap).includes(_import.value.source.value)) {
        return;
      }

      j(_import).replaceWith(
        j.importDeclaration(
          _import.value.specifiers,
          // @ts-ignore
          j.stringLiteral(sourceMap[_import.value.source.value])
        )
      );
    })
    .toSource();
}

(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1030:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(496).configure)([__webpack_require__(1031)],module,!1)}).call(this,__webpack_require__(240)(module))},1031:function(module,exports,__webpack_require__){var map={"./index.stories.tsx":1032};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1031},1032:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Single",(function(){return Single})),__webpack_require__.d(__webpack_exports__,"Multi",(function(){return Multi})),__webpack_require__.d(__webpack_exports__,"Grouped",(function(){return Grouped})),__webpack_require__.d(__webpack_exports__,"Creatable",(function(){return Creatable})),__webpack_require__.d(__webpack_exports__,"Async",(function(){return Async})),__webpack_require__.d(__webpack_exports__,"AsyncCreatable",(function(){return AsyncCreatable})),__webpack_require__.d(__webpack_exports__,"Custom",(function(){return Custom})),__webpack_require__.d(__webpack_exports__,"DesignExample",(function(){return DesignExample})),__webpack_require__.d(__webpack_exports__,"AsyncDesignExample",(function(){return AsyncDesignExample}));__webpack_require__(25),__webpack_require__(1033),__webpack_require__(75),__webpack_require__(98),__webpack_require__(105),__webpack_require__(91),__webpack_require__(15),__webpack_require__(1034),__webpack_require__(0);var _bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(85),_bb_ui_react_library_dist_components_Combobox_components__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(617),_bb_ui_icons_dist_small__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(618),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(64),options=[{value:"red",label:"Red"},{value:"green",label:"Green"},{value:"blue",label:"Blue"},{value:"orangered",label:"Orange Red"},{value:"darkolivegreen",label:"Dark Olive Green"},{value:"blueviolet",label:"Blue Violet"},{value:"orange",label:"Orange"},{value:"violet",label:"Violet"},{value:"olive",label:"Olive"}],groupedOptions=[{label:"Colors",options:options},{label:"Shapes",options:[{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"triangle",label:"Triangle"}]}];function handleOnChange(value,data){console.log("onChange",value,data)}function handleCreatableOnChange(value,data){console.log("onChange",value,data)}var strings={announceOptionSelected:function announceOptionSelected(option){return option.label+", selected."},announceOptionDeselected:function announceOptionDeselected(option){return option.label+", deselected."},announceValueCleared:"All values deselected.",announceSearchResults:function announceSearchResults(count,searchString){switch(count){case 0:return'No results found for "'+searchString+'"';case 1:return count+' result found for "'+searchString+'". Press down arrow to navigate through the results.';default:return count+' results found for "'+searchString+'". Press down arrow to navigate through the results.'}},noResults:function noResults(searchString){return'No results found for "'+searchString+'"'},clearButtonLabel:"Deselect all values.",searchLabel:"Search"},creatableStrings=Object.assign({},strings,{createOptionLabel:function createOptionLabel(searchString){return'Create: "'+searchString+'"'}}),asyncStrings=Object.assign({},strings,{loadingResults:"Loading..."}),sharedArgs={isSearchable:!0,isClearable:!0,floatingLabel:!1,disabled:!1,fullWidth:!1,autoFocus:!0,autoComplete:"off"};__webpack_exports__.default={title:"Combobox",component:_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.d,argTypes:{options:{options:["options","groupedOptions","longTextOptions"],mapping:{options:options,groupedOptions:groupedOptions,longTextOptions:[{value:"0",label:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},{value:"1",label:"Exercitationem, aperiam itaque fugiat in voluptate voluptas illum cumque dicta quae numquam mollitia cupiditate quaerat molestias."},{value:"2",label:"Non ipsa eveniet animi eum est"},{value:"3",label:"Pariatur velit, beatae quibusdam esse incidunt minus id ea, recusandae magnam nemo ipsam nam est omnis minima quam quae aut cumque odio."}]},control:{type:"select"}}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.d,Object.assign({strings:strings,onChange:handleOnChange},args))};Template.displayName="Template";var TemplateCreatable=function TemplateCreatable(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.e,Object.assign({strings:creatableStrings,onChange:handleCreatableOnChange},args))};TemplateCreatable.displayName="TemplateCreatable";var TemplateAsync=function TemplateAsync(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.a,Object.assign({strings:asyncStrings},args))};TemplateAsync.displayName="TemplateAsync";var TemplateAsyncCreatable=function TemplateAsyncCreatable(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.b,Object.assign({strings:Object.assign({},creatableStrings,asyncStrings)},args))};TemplateAsyncCreatable.displayName="TemplateAsyncCreatable";var Single=Template.bind({});Single.args=Object.assign({},sharedArgs,{label:"Select color",placeholder:"Select color",id:"picker-example",options:"options",fullWidth:!1}),Single.storyName="Single Value";var Multi=Template.bind({});Multi.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select colors",placeholder:"Select colors",id:"picker-example",options:"options"}),Multi.storyName="Multi Value";var Grouped=Template.bind({});Grouped.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select colors",placeholder:"Select colors",id:"picker-example",options:"groupedOptions"}),Grouped.storyName="Grouped Options";var Creatable=TemplateCreatable.bind({});Creatable.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select colors",placeholder:"Select colors",id:"picker-example",options:"options"}),Creatable.storyName="Creatable";var Async=TemplateAsync.bind({}),promiseOptions=function promiseOptions(inputValue){return new Promise((function(resolve){setTimeout((function(){resolve(function filterColors(inputValue){return options.filter((function(option){return option.label.toLowerCase().includes(inputValue.toLowerCase())}))}(inputValue))}),1e3)}))};Async.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select color",placeholder:"Select color",id:"picker-example",loadOptions:promiseOptions,cacheOptions:!0,defaultOptions:!0}),Async.storyName="Async";var AsyncCreatable=TemplateAsyncCreatable.bind({});AsyncCreatable.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select colors",placeholder:"Select colors",id:"picker-example",loadOptions:promiseOptions,cacheOptions:!0,defaultOptions:!0}),AsyncCreatable.storyName="AsyncCreatable";var customOptions=[{value:"red",label:"Red",hex:"#FF0000"},{value:"green",label:"Green",hex:"#008000"},{value:"blue",label:"Blue",hex:"#0000FF"}],useStyles=Object(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.h)((function(){return Object(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.g)({label:{marginRight:"auto"}})})),useColorSwatchStyles=Object(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.h)((function(theme){return Object(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.g)({value:{fontSize:theme.typography.fontSizeSmall,opacity:.7},swatch:{width:"16px",height:"16px",marginLeft:theme.spacing(2),backgroundColor:function backgroundColor(_ref){return _ref.option.hex}}})})),ColorSwatch=function ColorSwatch(props){var classes=useColorSwatchStyles(props);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span",{className:classes.value,children:["(",props.option.hex,")"]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{className:classes.swatch})]})},TemplateCustom=function TemplateCustom(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.d,Object.assign({strings:strings,onChange:handleOnChange,components:{MenuItem:function MenuItem(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_bb_ui_react_library_dist_components_Combobox_components__WEBPACK_IMPORTED_MODULE_10__.a,Object.assign({button:!0},props,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span",{className:useStyles().label,children:props.children}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ColorSwatch,{option:props.option})]}))}}},args,{options:customOptions}))};TemplateCustom.displayName="TemplateCustom";var Custom=TemplateCustom.bind({});Custom.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select colors",placeholder:"Select colors",id:"picker-example"}),Custom.storyName="Custom options";var DesignExample=Template.bind({}),useDesignExampleStyles=Object(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.h)((function(){return Object(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.g)({menuItemFixedHeight:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"calc(4 * 38px)"},noResultsIcon:{marginBottom:"4px"}})})),designComponents={NoResultsMenuItem:function NoResultsMenuItem(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.f,Object.assign({role:"option",className:useDesignExampleStyles().menuItemFixedHeight},props,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_icons_dist_small__WEBPACK_IMPORTED_MODULE_11__.a,{className:useDesignExampleStyles().noResultsIcon}),"No results found"]}))},LoadingResultsMenuItem:function LoadingResultsMenuItem(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.f,Object.assign({role:"option",className:useDesignExampleStyles().menuItemFixedHeight},props,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_bb_ui_react_library__WEBPACK_IMPORTED_MODULE_9__.c,{size:"small",id:"loading-indicator","aria-label":"Loading..."})}))}};DesignExample.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select colors",placeholder:"Select colors",id:"picker-example",options:"options",components:{NoResultsMenuItem:designComponents.NoResultsMenuItem},ListboxProps:{style:{maxHeight:"calc(4 * 38px)"}}}),DesignExample.storyName="Design Example";var AsyncDesignExample=TemplateAsyncCreatable.bind({});AsyncDesignExample.args=Object.assign({isMulti:!0},sharedArgs,{label:"Select color",placeholder:"Select color",id:"picker-example",loadOptions:promiseOptions,cacheOptions:!0,defaultOptions:!0,components:{NoResultsMenuItem:designComponents.NoResultsMenuItem,LoadingResultsMenuItem:designComponents.LoadingResultsMenuItem},ListboxProps:{style:{maxHeight:"calc(4 * 38px)"}}}),AsyncDesignExample.storyName="Design Async Example",Single.parameters=Object.assign({storySource:{source:"(args) => (\n  <Combobox\n    strings={strings}\n    onChange={handleOnChange}\n    {...args}\n  />\n)"}},Single.parameters),Multi.parameters=Object.assign({storySource:{source:"(args) => (\n  <Combobox\n    strings={strings}\n    onChange={handleOnChange}\n    {...args}\n  />\n)"}},Multi.parameters),Grouped.parameters=Object.assign({storySource:{source:"(args) => (\n  <Combobox\n    strings={strings}\n    onChange={handleOnChange}\n    {...args}\n  />\n)"}},Grouped.parameters),Creatable.parameters=Object.assign({storySource:{source:"(args) => (\n  <CreatableCombobox\n    strings={creatableStrings}\n    onChange={handleCreatableOnChange}\n    {...args}\n  />\n)"}},Creatable.parameters),Async.parameters=Object.assign({storySource:{source:"(args) => (\n  <AsyncCombobox\n    strings={asyncStrings}\n    {...args}\n  />\n)"}},Async.parameters),AsyncCreatable.parameters=Object.assign({storySource:{source:"(args) => (\n  <AsyncCreatableCombobox\n    strings={{ ...creatableStrings, ...asyncStrings }}\n    {...args}\n  />\n)"}},AsyncCreatable.parameters),Custom.parameters=Object.assign({storySource:{source:"(args) => (\n  <Combobox\n    strings={strings}\n    onChange={handleOnChange}\n    components={{\n      MenuItem: (props) => (\n        <ComboboxMenuItem button {...props}>\n          <span className={useStyles().label}>{props.children}</span>\n          <ColorSwatch option={props.option} />\n        </ComboboxMenuItem>\n      ),\n    }}\n    {...args}\n    options={customOptions}\n  />\n)"}},Custom.parameters),DesignExample.parameters=Object.assign({storySource:{source:"(args) => (\n  <Combobox\n    strings={strings}\n    onChange={handleOnChange}\n    {...args}\n  />\n)"}},DesignExample.parameters),AsyncDesignExample.parameters=Object.assign({storySource:{source:"(args) => (\n  <AsyncCreatableCombobox\n    strings={{ ...creatableStrings, ...asyncStrings }}\n    {...args}\n  />\n)"}},AsyncDesignExample.parameters)},1055:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters})),__webpack_require__.d(preview_namespaceObject,"decorators",(function(){return decorators}));__webpack_require__(38),__webpack_require__(11),__webpack_require__(75),__webpack_require__(579),__webpack_require__(1016),__webpack_require__(76),__webpack_require__(1017),__webpack_require__(1018),__webpack_require__(578);var client_api=__webpack_require__(1149),esm=__webpack_require__(9),JssThemeProvider=(__webpack_require__(0),__webpack_require__(327)),jsx_runtime=__webpack_require__(64),parameters={backgrounds:{disable:!0}},decorators=[function(Story,context){return Object(jsx_runtime.jsx)(JssThemeProvider.a,{theme:"light",children:Object(jsx_runtime.jsx)(Story,{})})}];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},661:function(module,exports,__webpack_require__){__webpack_require__(662),__webpack_require__(817),__webpack_require__(818),__webpack_require__(1047),__webpack_require__(1048),__webpack_require__(1049),__webpack_require__(1053),__webpack_require__(1050),__webpack_require__(1051),__webpack_require__(1054),__webpack_require__(1052),__webpack_require__(1055),module.exports=__webpack_require__(1030)},728:function(module,exports){},818:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(496)}},[[661,2,3]]]);
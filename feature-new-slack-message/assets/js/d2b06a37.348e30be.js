"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[642],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294);function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7462),o=n(7294),r=n(2389),i=n(3725),l=n(6010),s="tabItem_LplD";function d(e){var t,n,r,d=e.lazy,c=e.block,m=e.defaultValue,u=e.values,p=e.groupId,f=e.className,_=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:_.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(v,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=_.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=_[0])?void 0:r.props.value;if(null!==b&&!v.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,k=g.setTabGroupChoices,w=(0,o.useState)(b),N=w[0],x=w[1],C=[],T=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var O=y[p];null!=O&&O!==N&&v.some((function(e){return e.value===O}))&&x(O)}var j=function(e){var t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==N&&(T(t),x(a),null!=p&&k(p,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var o=C.indexOf(e.currentTarget)-1;n=C[o]||C[C.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},v.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:function(e){return C.push(e)},onKeyDown:E,onFocus:j,onClick:j},r,{className:(0,l.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=n?n:t)}))),d?(0,o.cloneElement)(_.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},_.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}function c(e){var t=(0,r.Z)();return o.createElement(d,(0,a.Z)({key:String(t)},e))}},2916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return _},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),i=n(9877),l=n(8215),s=["components"],d={sidebar_position:0},c="Configuration \u2699\ufe0f",m={unversionedId:"reference/config",id:"reference/config",title:"Configuration \u2699\ufe0f",description:"To run redata you would need to configure what tables should be monitored and set up some properties of this monitoring. You may also want/need to update some of the defaults vars use by redata to run it for specific time windows or compute types of metrics you need.",source:"@site/docs/reference/config.mdx",sourceDirName:"reference",slug:"/reference/config",permalink:"/feature-new-slack-message/docs/reference/config",editUrl:"https://github.com/re-data/re-data/edit/master/docs/docs/reference/config.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Notifications",permalink:"/feature-new-slack-message/docs/getting_started/toy_shop/notifications"},next:{title:"Init",permalink:"/feature-new-slack-message/docs/reference/cli/init"}},u={},p=[{value:"Model level config",id:"model-level-config",level:2},{value:"Monitoring properties",id:"monitoring-properties",level:2},{value:"re_data_monitored",id:"re_data_monitored",level:3},{value:"re_data_time_filter",id:"re_data_time_filter",level:3},{value:"re_data_columns (optional)",id:"re_data_columns-optional",level:3},{value:"re_data_metrics (optional)",id:"re_data_metrics-optional",level:3},{value:"re_data_anomaly_detector (options)",id:"re_data_anomaly_detector-options",level:3},{value:"Global config vars",id:"global-config-vars",level:2},{value:"re_data:time_window_start, re_data:time_window_end",id:"re_datatime_window_start-re_datatime_window_end",level:3},{value:"re_data:metrics_base",id:"re_datametrics_base",level:3},{value:"re_data:anomaly_detector",id:"re_dataanomaly_detector",level:3},{value:"re_data:anomaly_detection_look_back_days",id:"re_dataanomaly_detection_look_back_days",level:3}],f={toc:p};function _(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-\ufe0f"},"Configuration \u2699\ufe0f"),(0,r.kt)("p",null,"To run re_data you would need to configure what tables should be monitored and set up some properties of this monitoring. You may also want/need to update some of the defaults vars use by re_data to run it for specific time windows or compute types of metrics you need."),(0,r.kt)("h2",{id:"model-level-config"},"Model level config"),(0,r.kt)("p",null,"Currently re_data supports dbt native configuration, by leveraging dbt models & sources configs."),(0,r.kt)("p",null,"If you are not familiar with dbt models & sources configuration we encourage to check the dbt: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/model-configs"},"model-configs")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/source-configs"},"source-configs")," documentation."),(0,r.kt)("p",null,"re_data dbt native cofiguration follows the same rules as dbt configuration, config block inside model will have the most priority and configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," will have the least priority."),(0,r.kt)(i.Z,{defaultValue:"config_block",values:[{label:"Config block",value:"config_block"},{label:"Property file",value:"property_file"},{label:"Project file",value:"project_file"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"config_block",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="<model_name>.sql"',title:'"<model_name>.sql"'},"{{\n    config(\n      re_data_monitored=true,\n      re_data_time_filter='creation_time',\n      re_data_columns=['amount', 'status'],\n      re_data_metrics={'table': ['orders_obove_100'], 'column': { 'status': ['distinct_values'],\n      re_data_anomaly_detector={'name': 'modified_z_score', 'threshold': 3.0} }}\n    )\n}}\n\n\nselect ...\n"))),(0,r.kt)(l.Z,{value:"property_file",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:"title=schema.yml",title:"schema.yml"},"version: 2\n\nmodels:\n  - name: pending_orders\n    config:\n      +re_data_monitored: true\n      +re_data_time_filter: created_at\n      +re_data_columns:\n        - amount\n        - status\n      +re_data_metrics:\n        table:\n          - orders_above_100\n        column:\n          status:\n            - distinct_values\n      +re_data_anomaly_detector:\n        name: modified_z_score\n        threshold: 3\n          \n          \n"))),(0,r.kt)(l.Z,{value:"project_file",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml",metastring:'title="dbt_project.yml"',title:'"dbt_project.yml"'},"models:\n  toy_shop:\n    revenue:\n      +re_data_monitored: true\n      +re_data_time_filter: created_at\n      +re_data_anomaly_detector:\n        name: modified_z_score\n        threshold: 3\n\n      orders_per_age:\n        +re_data_metrics:\n          table:\n            - orders_above_100\n\nsources:\n  toy_shop:\n    toy_shop_sources:\n      toy_shop_customers:\n        +re_data_monitored: true\n        +re_data_time_filter: joined_at\n  \nseeds:\n  toy_shop:\n    order_items:\n      +re_data_monitored: true\n      +re_data_time_filter: added_at\n      +re_data_anomaly_detector:\n        name: z_score\n        threshold: 3\n      +re_data_columns:\n        - name\n        - amount\n\n")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Notice that you can only apply the ",(0,r.kt)("inlineCode",{parentName:"p"},"Config block")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Property file")," configuration to models. Sources need to be configured in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dbt_project.yml")," file. Currently, dbt doesn't accept config for them, as stated in ",(0,r.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/source-configs"},"dbt docs"),"."))),(0,r.kt)("p",null,"You can define configuration on many levels; it's common to enable re_data for a group of tables (for example, all sources). It's also common to override some of the properties for specific groups."),(0,r.kt)("p",null,"Now let's go over the configuration you can set on models"),(0,r.kt)("h2",{id:"monitoring-properties"},"Monitoring properties"),(0,r.kt)("h3",{id:"re_data_monitored"},"re_data_monitored"),(0,r.kt)("p",null,"Set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to enable monitoring for a given table or set of tables."),(0,r.kt)("h3",{id:"re_data_time_filter"},"re_data_time_filter"),(0,r.kt)("p",null,"SQL expression (for example, column name) to filter records of the table to a specific time range. It can be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," if you wish to compute metrics on the whole table. This expression will be compared to ",(0,r.kt)("inlineCode",{parentName:"p"},"re_data:time_window_start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"re_data:time_window_end")," vars during the run. (described below)"),(0,r.kt)("h3",{id:"re_data_columns-optional"},"re_data_columns (optional)"),(0,r.kt)("p",null,"Set of columns for which re_data should compute metrics. If not specified, re_data will compute stats for all columns with either numeric or text types."),(0,r.kt)("h3",{id:"re_data_metrics-optional"},"re_data_metrics (optional)"),(0,r.kt)("p",null,"Additional metrics to be computed for a given table (set of tables). Those can be either whole ",(0,r.kt)("inlineCode",{parentName:"p"},"table")," level or ",(0,r.kt)("inlineCode",{parentName:"p"},"column")," level. (Check out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/overview_metric"},"metrics"))," section to learn distinction between the two)"),(0,r.kt)("p",null,"You can be pass any number of already defined or your custom metrics to be computed. Check out ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/extra_metrics"},"extra metrics"))," section for available metrics and ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/reference/metrics/your_own_metric"},"custom metrics"))," for ways to define your own metrics."),(0,r.kt)("h3",{id:"re_data_anomaly_detector-options"},"re_data_anomaly_detector (options)"),(0,r.kt)("p",null,"Alternative anomaly dector with it's parameters to use when detecting anomalies in a given model (set of models)"),(0,r.kt)("p",null,"For details about configuration look into ",(0,r.kt)("a",{parentName:"p",href:"anomaly_detection"},"Anomaly Detection")),(0,r.kt)("h2",{id:"global-config-vars"},"Global config vars"),(0,r.kt)("p",null,"Apart from model specific config re_data enables you to edit global configuration for some of the parameters.\nAll of them are optional so we start with sensible defaults and let you override if there is a need."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Parameters of re_data configuration"',title:'"Parameters',of:!0,re_data:!0,'configuration"':!0},"vars:\n  # (optional) if not passed, stats for last day will be computed\n  re_data:time_window_start: '{{ (run_started_at - modules.datetime.timedelta(1)).strftime(\"%Y-%m-%d 00:00:00\") }}'\n  re_data:time_window_end: '{{ run_started_at.strftime(\"%Y-%m-%d 00:00:00\") }}'\n\n  # (optional) override standard metrics computed for all your tables\n  re_data:metrics_base:\n    table:\n      - row_count\n      - freshness\n      - buy_count # my own custom metric\n      \n    column:\n      numeric:\n        - min\n        - max\n        - avg\n        - stddev\n        - variance\n        - nulls_count\n        - diff # my own custom metric\n        \n      text:\n        - min_length\n        - max_length\n        - avg_length\n        - nulls_count\n        - missing_count\n\n  # (optional) tells how much hisory you want to consider when looking for anomalies\n  re_data:anomaly_detection_look_back_days: 30\n")),(0,r.kt)("h3",{id:"re_datatime_window_start-re_datatime_window_end"},"re_data:time_window_start, re_data:time_window_end"),(0,r.kt)("p",null,"re_data metrics are time-based. (re_data filters all your table data to a specific time window.)\nIn general, we advise setting up a time window this way that all new data is monitored.\nIt's also possible to compute metrics from overlapping data for example last 7 days."),(0,r.kt)("p",null,"By default, re_data computes daily stats from the last day (it actually uses exact configuration from example for that)"),(0,r.kt)("h3",{id:"re_datametrics_base"},"re_data:metrics_base"),(0,r.kt)("p",null,"This is a set of metrics to compute for all monitored tables.\nSome metrics like ",(0,r.kt)("inlineCode",{parentName:"p"},"row_count")," are table level, others are specified\nper column type: so that expression will be run for all columns of this type."),(0,r.kt)("p",null,"Here you only add metrics if you want to compute them for all tables which are monitored. You can also set up metrics to be computed for specific tables only (with table specific config)"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"schema changes are currently not set up using this parameter. Every monitored table is scanned for schema changed currently."))),(0,r.kt)("h3",{id:"re_dataanomaly_detector"},"re_data:anomaly_detector"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"anomaly_detection"},"Anomaly Detection")),(0,r.kt)("h3",{id:"re_dataanomaly_detection_look_back_days"},"re_data:anomaly_detection_look_back_days"),(0,r.kt)("p",null,"The period which ",(0,r.kt)("inlineCode",{parentName:"p"},"re_data")," considers when looking for anomalies. (By default, it's 30 days)"))}_.isMDXComponent=!0}}]);
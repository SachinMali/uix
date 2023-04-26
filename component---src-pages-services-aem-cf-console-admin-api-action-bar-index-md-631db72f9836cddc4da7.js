"use strict";(self.webpackChunk_adobe_uix_docs=self.webpackChunk_adobe_uix_docs||[]).push([[6843],{90038:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return u}});var a=n(87462),i=n(45987),r=(n(15007),n(64983)),l=n(91515);const d=["components"],m={},o=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var s;const p={_frontmatter:m},c=l.Z;function u(e){let{components:t}=e,n=(0,i.Z)(e,d);return(0,r.mdx)(c,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"action-bar"},"Action Bar"),(0,r.mdx)("p",null,"The Action Bar is an area above the content fragment list in the ",(0,r.mdx)("a",{parentName:"p",href:"../../"},"Content Fragments Console")," that displays action items that can be executed on selected content fragments. These actions may include editing, deleting, exporting, cloning, or publishing content fragments, and the Action Bar appears over the ",(0,r.mdx)("a",{parentName:"p",href:"../header-menu"},"Header Menu")," when one or multiple content fragments are selected."),(0,r.mdx)("p",null,(0,r.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1000px"}},"\n      ",(0,r.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.12500000000001%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,r.mdx)("picture",{parentName:"span"},"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uix/static/4a8493658edded4712e63e3555cf342a/5530d/action-bar.webp 320w","/uix/static/4a8493658edded4712e63e3555cf342a/0c8fb/action-bar.webp 640w","/uix/static/4a8493658edded4712e63e3555cf342a/80c60/action-bar.webp 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/webp"}),"\n          ",(0,r.mdx)("source",{parentName:"picture",srcSet:["/uix/static/4a8493658edded4712e63e3555cf342a/dd4a7/action-bar.png 320w","/uix/static/4a8493658edded4712e63e3555cf342a/0f09e/action-bar.png 640w","/uix/static/4a8493658edded4712e63e3555cf342a/1263b/action-bar.png 1000w"],sizes:"(max-width: 1000px) 100vw, 1000px",type:"image/png"}),"\n          ",(0,r.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uix/static/4a8493658edded4712e63e3555cf342a/1263b/action-bar.png",alt:"Action Bar",title:"Action Bar",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,r.mdx)("p",null,"Action bar can be customized via methods defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"actionBar")," namespace."),(0,r.mdx)("p",null,"You have the ability to:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"create multiple buttons from single extension;"),(0,r.mdx)("li",{parentName:"ul"},"implement drop-down menu buttons;"),(0,r.mdx)("li",{parentName:"ul"},"use any ",(0,r.mdx)("a",{parentName:"li",href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons"},"icon")," from React Spectrum;")),(0,r.mdx)("h2",{id:"custom-button-with-callback"},"Custom button with callback"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import { register } from "@adobe/uix-guest";\n\n// ...\n\nconst guestConnection = await register({\n    id: "my.company.extension-with-action-bar-button",\n    methods: {\n        actionBar: {\n            getButtons() {\n                return [\n                    {\n                        id: "my.company.export-button",\n                        label: "Export",\n                        icon: \'Export\',\n                        onClick: (selections) => {\n                            console.log(\'Export button has been pressed\', selections);\n                        },\n                    },\n                ];\n            },\n        },\n    },\n});\n')),(0,r.mdx)("h2",{id:"custom-button-with-sub-menu"},"Custom button with sub menu"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { register } from \"@adobe/uix-guest\";\n\n// ...\n\nconst guestConnection = await register({\n    id: \"my.company.extension-with-action-bar-button\",\n    methods: {\n        actionBar: {\n            getButtons() {\n                return [\n                    {\n                        id: \"my.company.export-button\",\n                        label: \"Export\",\n                        icon: 'Export',\n                        subItems: [\n                            {\n                                id: 'xml',\n                                label: 'XML',\n                                onClick: (selections) => {\n                                    console.log('Export in XML button has been pressed.', selections);\n                                    // ...\n                                },\n                            },\n                            {\n                                id: 'csv',\n                                label: 'CSV',\n                                onClick: (selections) => {\n                                    console.log('Export in CSV button has been pressed.', selections);\n                                    // ...\n                                },\n                            },\n                        ],\n                    },\n                ];\n            },\n        },\n    },\n});\n")),(0,r.mdx)("p",null,"The callback is invoked when user clicks on the button and receives list of content fragments selected in the list."),(0,r.mdx)(o,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"getButton")," method is deprecated. When defining a single button, use ",(0,r.mdx)("inlineCode",{parentName:"p"},"getButtons")," and provide a single-item array."),(0,r.mdx)("h2",{id:"api-reference"},"API Reference"),(0,r.mdx)("h3",{id:"button-api"},"Button API"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"id"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Must be unique")," across all extensions. Consider adding a vendor prefix to this field")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,r.mdx)("td",{parentName:"tr",align:null},"Button label that will be visible on UI")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"icon"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of a ",(0,r.mdx)("a",{parentName:"td",href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons"},"React-Spectrum workflow icon"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"subItems"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"array")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"A list with sub menu items")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"callback(selections): void")),(0,r.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,r.mdx)("td",{parentName:"tr",align:null},"A callback for a button ",(0,r.mdx)("inlineCode",{parentName:"td"},"onClick")," event. Receives list of content fragments selected in the list")))),(0,r.mdx)("h3",{id:"sub-menu-item-api"},"Sub menu item API"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Field"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"id"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Must be unique")," across the current button sub menu")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"label"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,r.mdx)("td",{parentName:"tr",align:null},"Button label that will be visible on UI")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"icon"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"string")),(0,r.mdx)("td",{parentName:"tr",align:null}),(0,r.mdx)("td",{parentName:"tr",align:null},"Name of a ",(0,r.mdx)("a",{parentName:"td",href:"https://react-spectrum.adobe.com/react-spectrum/workflow-icons.html#available-icons"},"React-Spectrum workflow icon"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"onClick"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"callback(selections): void")),(0,r.mdx)("td",{parentName:"tr",align:null},"✔️"),(0,r.mdx)("td",{parentName:"tr",align:null},"A callback for a button ",(0,r.mdx)("inlineCode",{parentName:"td"},"onClick")," event. Receives list of content fragments selected in the list")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-services-aem-cf-console-admin-api-action-bar-index-md-631db72f9836cddc4da7.js.map
"use strict";
exports.id = 340;
exports.ids = [340];
exports.modules = {

/***/ 2340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Customer),
/* harmony export */   "getCost": () => (/* binding */ getCost),
/* harmony export */   "getPrice": () => (/* binding */ getPrice),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formspree_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8296);
/* harmony import */ var _formspree_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formspree_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





// import { useForm, ValidationError } from "@formspree/react";
// import { useForm, ValidationError } from '@formspree/react';
// let x = true ;
const url = "https://alaa-project-nextjs-9hhq.vercel.app";
///////////
// export const url = "http://localhost:3000";
const getPrice = (value)=>value * 1.25;
const getCost = (value)=>value * 1.043;
function Customer() {
    const [state, handleSubmit] = (0,_formspree_react__WEBPACK_IMPORTED_MODULE_1__.useForm)("mqazogok");
    if (state.succeeded) {
        alert("تم الارسال بنجاح");
    }
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const fetchData = ()=>{
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${url}/api/posts`).then((res)=>{
            let dataOrdered = res.data.sort((a, b)=>{
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            });
            setData(dataOrdered);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        fetchData();
    }, []);
    async function deleteCustomer(e) {
        let x = window.confirm(`هل أنت متأكد من حذف بيانات ${e.name}  ؟`);
        if (x) {
            axios__WEBPACK_IMPORTED_MODULE_2__["default"]["delete"](`${url}/api/posts/${e._id}`).then(()=>{
                fetchData();
            });
        }
    }
    let total = data.reduce((acc, curr)=>{
        if (!acc[curr.name]) {
            acc[curr.name] = {
                name: curr.name,
                value: curr.value,
                price: curr.price,
                cost: curr.cost
            };
        } else {
            acc[curr.name].value += curr.value;
            acc[curr.name].price += curr.price;
            acc[curr.name].cost += curr.cost;
        }
        return acc;
    }, {});
    let uniqueTotal = Object.values(total);
    let dataCompleteSend = "";
    let dataComplete = data.map((e)=>{
        let item = `
    الاسم : ${e.name} 
    قيمة الرصيد : ${e.value} 
    السعر: ${e.price}
    التاريخ : ${e.date}
    `;
        dataCompleteSend += item + "\n";
        return e;
    });
    let dataNotCompleteSend = "";
    let dataNotComplete = uniqueTotal.map((e)=>{
        let item = `
        الاسم : ${e.name} 
        المبلغ الكلي: ${e.price}
        `;
        dataNotCompleteSend += item + "\n";
        return e;
    });
    const [textAreaData, setTextAreaData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("abuomarcom4@gmail.com");
    function sendGmail(isComplete) {
        if (isComplete) {
            setTextAreaData(dataCompleteSend);
        // setEmail('abuomarcom4@gmail.com')
        } else {
            setTextAreaData(dataNotCompleteSend);
        // setEmail('abuomarcom4@gmail.com')
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "add-customer",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                    href: "/customers/addcustomer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        children: "إضافة زبون"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "table-customers",
                dir: "rtl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "الاسم"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "قيمة الرصيد"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "السعر"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "التكلفة"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "التاريخ"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "الحدث المراد"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: data.map((e)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.value
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.price.toFixed(0)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.cost.toFixed(0)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.date
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                        className: "actions-buttons",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>{
                                                    deleteCustomer(e);
                                                },
                                                className: "del-btn",
                                                children: "حذف"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: `/customers/edit/${e._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "edit-btn",
                                                    children: "تعديل"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: `/customers/add/${e._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "add-btn",
                                                    children: "إضافة رصيد"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                href: `/customers/addcost/${e._id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "add-cost-btn",
                                                    children: "إضافة مبلغ"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }, e._id);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                style: {
                    marginTop: "30px"
                },
                children: "جدول الإحصائيات"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                className: "table-customers",
                dir: "rtl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "الاسم"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "قيمة الرصيد"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "السعر"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                    children: "التكلفة"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: uniqueTotal.map((e, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.name
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: e.value
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: Number(e.price).toFixed(0)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: Number(e.cost).toFixed(0)
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "gmail-form",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "desc-buttons",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>{
                                    sendGmail(true);
                                },
                                children: "إرسال كامل البيانات"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>{
                                    sendGmail(false);
                                },
                                children: "إرسال البيانات الإحصائية فقط"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            position: "absolute",
                            visibility: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                htmlFor: "email",
                                children: "Email Address"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                id: "email",
                                type: "email",
                                name: "email",
                                value: email,
                                onChange: ()=>{}
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formspree_react__WEBPACK_IMPORTED_MODULE_1__.ValidationError, {
                                prefix: "Email",
                                field: "email",
                                errors: state.errors
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "cotainer-textarea",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                            id: "message",
                            name: "message",
                            value: textAreaData,
                            onChange: (e)=>{
                                setTextAreaData(e.target.value);
                            }
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_formspree_react__WEBPACK_IMPORTED_MODULE_1__.ValidationError, {
                        prefix: "Message",
                        field: "message",
                        errors: state.errors
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container-submit-btn",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            id: "submitGmailBtn",
                            type: "submit",
                            disabled: state.submitting,
                            children: "إرسال"
                        })
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
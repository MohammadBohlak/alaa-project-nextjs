"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts/[id]";
exports.ids = ["pages/api/posts/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst postSchema = new mongoose.Schema({\n    name: String,\n    value: Number,\n    price: Number,\n    cost: Number\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.models.Post || mongoose.model(\"Post\", postSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsV0FBV0MsbUJBQU9BLENBQUM7QUFHekIsTUFBTUMsYUFBYSxJQUFJRixTQUFTRyxNQUFNLENBQUM7SUFDbkNDLE1BQU9DO0lBQ1BDLE9BQU9DO0lBQ1BDLE9BQU9EO0lBQ1BFLE1BQU9GO0FBQ1g7QUFHQSxpRUFBZVAsU0FBU1UsTUFBTSxDQUFDQyxJQUFJLElBQUlYLFNBQVNZLEtBQUssQ0FBQyxRQUFPVixXQUFBQSxFQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXltb25nb2RhdGEvLi9tb2RlbHMvUG9zdC5qcz80NmI2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuXG5jb25zdCBwb3N0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZSA6IFN0cmluZyxcbiAgICB2YWx1ZTogTnVtYmVyLFxuICAgIHByaWNlOiBOdW1iZXIsXG4gICAgY29zdCA6IE51bWJlclxufSlcblxuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUG9zdCB8fCBtb25nb29zZS5tb2RlbCgnUG9zdCcscG9zdFNjaGVtYSApIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInBvc3RTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwiU3RyaW5nIiwidmFsdWUiLCJOdW1iZXIiLCJwcmljZSIsImNvc3QiLCJtb2RlbHMiLCJQb3N0IiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Post.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/[id].js":
/*!*********************************!*\
  !*** ./pages/api/posts/[id].js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Post */ \"(api)/./models/Post.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().delete(async (req, res)=>{\n    try {\n        const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n            _id: req.query.id\n        });\n        res.send({\n            message: \"Deleted Successfuly\"\n        });\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n}).put(async (req, res)=>{\n    try {\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            _id: req.query.id\n        });\n        post.name = req.body.name;\n        post.value = req.body.value;\n        post.price = Number(post.value) / 1000 * 1250;\n        post.cost = Number(post.value) / 1000 * 1043;\n        await post.save();\n        res.send({\n            satus: 200,\n            message: \"successful\",\n            customer: post\n        });\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n}).get(async (req, res)=>{\n    try {\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            _id: req.query.id\n        });\n        res.send(post);\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1M7QUFDWjtBQUU5QkMsNERBQVNBO0FBR1QsTUFBTUUsVUFBVUQsd0RBQUVBLEdBQUdFLE1BQU0sQ0FBQyxPQUFNQyxLQUFLQyxNQUFRO0lBRTNDLElBQUk7UUFDQSxNQUFNQyxRQUFRLE1BQU1QLHFFQUFxQixDQUFDO1lBQUNTLEtBQUtKLElBQUlLLEtBQUssQ0FBQ0MsRUFBRTtRQUFBO1FBQzVETCxJQUFJTSxJQUFJLENBQUM7WUFBQ0MsU0FBUTtRQUFxQjtJQUMzQyxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFRUixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNILFNBQVE7UUFBOEI7SUFDeEU7QUFHRixHQUFJSSxHQUFHLENBQUMsT0FBT1osS0FBS0MsTUFBUTtJQUUxQixJQUFJO1FBQ0EsTUFBTVksT0FBTyxNQUFNbEIsNERBQVksQ0FBQztZQUFDUyxLQUFLSixJQUFJSyxLQUFLLENBQUNDLEVBQUU7UUFBQTtRQUNsRE8sS0FBS0UsSUFBSSxHQUFHZixJQUFJZ0IsSUFBSSxDQUFDRCxJQUFJO1FBQ3pCRixLQUFLSSxLQUFLLEdBQUVqQixJQUFJZ0IsSUFBSSxDQUFDQyxLQUFLO1FBQzFCSixLQUFLSyxLQUFLLEdBQUVDLE9BQU9OLEtBQUtJLEtBQUssSUFBSSxPQUFPO1FBQ3hDSixLQUFLTyxJQUFJLEdBQUVELE9BQU9OLEtBQUtJLEtBQUssSUFBSSxPQUFPO1FBQ3ZDLE1BQU1KLEtBQUtRLElBQUk7UUFDZnBCLElBQUlNLElBQUksQ0FBQztZQUFDZSxPQUFNO1lBQU1kLFNBQVE7WUFBZWUsVUFBVVY7UUFBSTtJQUMvRCxFQUFFLE9BQU9KLE9BQU87UUFDWixPQUFRUixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNILFNBQVE7UUFBOEI7SUFDeEU7QUFHRixHQUFHZ0IsR0FBRyxDQUFDLE9BQU94QixLQUFJQyxNQUFNO0lBQ3RCLElBQUk7UUFDQSxNQUFNWSxPQUFPLE1BQU1sQiw0REFBWSxDQUFDO1lBQUNTLEtBQUtKLElBQUlLLEtBQUssQ0FBQ0MsRUFBRTtRQUFBO1FBQ2xETCxJQUFJTSxJQUFJLENBQUNNO0lBQ2IsRUFBRSxPQUFPSixPQUFPO1FBQ1osT0FBUVIsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDSCxTQUFRO1FBQThCO0lBQ3hFO0FBQ0Y7QUFFQSxpRUFBZVYsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215bW9uZ29kYXRhLy4vcGFnZXMvYXBpL3Bvc3RzL1tpZF0uanM/NjIwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUG9zdCBmcm9tIFwiQC9tb2RlbHMvUG9zdFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC91dGlscy9kYkNvbm5lY3RcIjtcbmltcG9ydCBuYyBmcm9tIFwibmV4dC1jb25uZWN0XCI7XG5cbmRiQ29ubmVjdCgpXG5cblxuY29uc3QgaGFuZGxlciA9IG5jKCkuZGVsZXRlKGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICBcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3QuZmluZE9uZUFuZERlbGV0ZSh7X2lkOiByZXEucXVlcnkuaWR9KVxuICAgICAgICByZXMuc2VuZCh7bWVzc2FnZTpcIkRlbGV0ZWQgU3VjY2Vzc2Z1bHlcIn0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6J1NvcnJ5IHNvbWV0aGluZyB3ZW50IHdyb25nICEnfSk7XG4gICAgfVxuICAgXG4gICBcbiAgfSkgLnB1dChhc3luYyAocmVxLCByZXMpID0+IHtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBQb3N0LmZpbmRPbmUoe19pZDogcmVxLnF1ZXJ5LmlkfSlcbiAgICAgICAgcG9zdC5uYW1lID0gcmVxLmJvZHkubmFtZVxuICAgICAgICBwb3N0LnZhbHVlPSByZXEuYm9keS52YWx1ZVxuICAgICAgICBwb3N0LnByaWNlPSBOdW1iZXIocG9zdC52YWx1ZSkgLyAxMDAwICogMTI1MFxuICAgICAgICBwb3N0LmNvc3Q9IE51bWJlcihwb3N0LnZhbHVlKSAvIDEwMDAgKiAxMDQzXG4gICAgICAgIGF3YWl0IHBvc3Quc2F2ZSgpXG4gICAgICAgIHJlcy5zZW5kKHtzYXR1czoyMDAsICBtZXNzYWdlOlwic3VjY2Vzc2Z1bFwiICwgY3VzdG9tZXI6IHBvc3R9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOidTb3JyeSBzb21ldGhpbmcgd2VudCB3cm9uZyAhJ30pO1xuICAgIH1cblxuIFxuICB9KS5nZXQoYXN5bmMgKHJlcSxyZXMpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuZmluZE9uZSh7X2lkOiByZXEucXVlcnkuaWR9KVxuICAgICAgICByZXMuc2VuZChwb3N0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOidTb3JyeSBzb21ldGhpbmcgd2VudCB3cm9uZyAhJ30pO1xuICAgIH1cbiAgfSlcbiBcbiAgZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJQb3N0IiwiZGJDb25uZWN0IiwibmMiLCJoYW5kbGVyIiwiZGVsZXRlIiwicmVxIiwicmVzIiwicG9zdHMiLCJmaW5kT25lQW5kRGVsZXRlIiwiX2lkIiwicXVlcnkiLCJpZCIsInNlbmQiLCJtZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwicHV0IiwicG9zdCIsImZpbmRPbmUiLCJuYW1lIiwiYm9keSIsInZhbHVlIiwicHJpY2UiLCJOdW1iZXIiLCJjb3N0Iiwic2F2ZSIsInNhdHVzIiwiY3VzdG9tZXIiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/[id].js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dbConnect)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nasync function dbConnect() {\n    try {\n        await mongoose.connect(\"mongodb+srv://mohammad:123@cluster0.s0eoj.mongodb.net/mydata\", {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n        console.log(\"Connected successfully !\");\n    } catch (error) {\n        console.log(\"field connected\\n\", error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRVQsZUFBZUMsWUFBWTtJQUN2QyxJQUFJO1FBQ0YsTUFBTUYsU0FBU0csT0FBTyxDQUFDLGdFQUN2QjtZQUFDQyxvQkFBbUIsSUFBSTtZQUFHQyxpQkFBZ0IsSUFBSTtRQUFBO1FBRS9DQyxRQUFRQyxHQUFHLENBQUM7SUFFZCxFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDLHFCQUFzQkM7SUFDdEM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXltb25nb2RhdGEvLi91dGlscy9kYkNvbm5lY3QuanM/YzNjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG5cbmV4cG9ydCBkZWZhdWx0ICBhc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vbW9oYW1tYWQ6MTIzQGNsdXN0ZXIwLnMwZW9qLm1vbmdvZGIubmV0L215ZGF0YScgLFxuICAgICAge3VzZVVuaWZpZWRUb3BvbG9neTp0cnVlICwgdXNlTmV3VXJsUGFyc2VyOnRydWV9KTtcblxuICAgICAgY29uc29sZS5sb2coJ0Nvbm5lY3RlZCBzdWNjZXNzZnVsbHkgIScpXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcImZpZWxkIGNvbm5lY3RlZFxcblwiICwgZXJyb3IpXG4gICAgfVxufVxuXG4gIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/[id].js"));
module.exports = __webpack_exports__;

})();
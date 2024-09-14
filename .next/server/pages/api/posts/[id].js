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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Post */ \"(api)/./models/Post.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().delete(async (req, res)=>{\n    try {\n        const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOneAndDelete({\n            _id: req.query.id\n        });\n        res.send({\n            message: \"Deleted Successfuly\"\n        });\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n}).put(async (req, res)=>{\n    try {\n        const post = await _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n            _id: req.query.id\n        });\n        post.name = req.body.name;\n        post.value = req.body.value;\n        post.price = Number(post.value) / 1000 * 1250;\n        post.cost = Number(post.value) / 1000 * 1043;\n        await post.save();\n        res.send({\n            satus: 200,\n            message: \"successful\",\n            customer: post\n        });\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBQ1M7QUFDWjtBQUU5QkMsNERBQVNBO0FBR1QsTUFBTUUsVUFBVUQsd0RBQUVBLEdBQUdFLE1BQU0sQ0FBQyxPQUFNQyxLQUFLQyxNQUFRO0lBRTNDLElBQUk7UUFDQSxNQUFNQyxRQUFRLE1BQU1QLHFFQUFxQixDQUFDO1lBQUNTLEtBQUtKLElBQUlLLEtBQUssQ0FBQ0MsRUFBRTtRQUFBO1FBQzVETCxJQUFJTSxJQUFJLENBQUM7WUFBQ0MsU0FBUTtRQUFxQjtJQUMzQyxFQUFFLE9BQU9DLE9BQU87UUFDWixPQUFRUixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNILFNBQVE7UUFBOEI7SUFDeEU7QUFHRixHQUFJSSxHQUFHLENBQUMsT0FBT1osS0FBS0MsTUFBUTtJQUUxQixJQUFJO1FBQ0EsTUFBTVksT0FBTyxNQUFNbEIsNERBQVksQ0FBQztZQUFDUyxLQUFLSixJQUFJSyxLQUFLLENBQUNDLEVBQUU7UUFBQTtRQUNsRE8sS0FBS0UsSUFBSSxHQUFHZixJQUFJZ0IsSUFBSSxDQUFDRCxJQUFJO1FBQ3pCRixLQUFLSSxLQUFLLEdBQUVqQixJQUFJZ0IsSUFBSSxDQUFDQyxLQUFLO1FBQzFCSixLQUFLSyxLQUFLLEdBQUVDLE9BQU9OLEtBQUtJLEtBQUssSUFBSSxPQUFPO1FBQ3hDSixLQUFLTyxJQUFJLEdBQUVELE9BQU9OLEtBQUtJLEtBQUssSUFBSSxPQUFPO1FBQ3ZDLE1BQU1KLEtBQUtRLElBQUk7UUFDZnBCLElBQUlNLElBQUksQ0FBQztZQUFDZSxPQUFNO1lBQU1kLFNBQVE7WUFBZWUsVUFBVVY7UUFBSTtJQUMvRCxFQUFFLE9BQU9KLE9BQU87UUFDWixPQUFRUixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNILFNBQVE7UUFBOEI7SUFDeEU7QUFHRjtBQUVBLGlFQUFlVixPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXltb25nb2RhdGEvLi9wYWdlcy9hcGkvcG9zdHMvW2lkXS5qcz82MjAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQb3N0IGZyb20gXCJAL21vZGVscy9Qb3N0XCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL3V0aWxzL2RiQ29ubmVjdFwiO1xuaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcblxuZGJDb25uZWN0KClcblxuXG5jb25zdCBoYW5kbGVyID0gbmMoKS5kZWxldGUoYXN5bmMocmVxLCByZXMpID0+IHtcbiAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdC5maW5kT25lQW5kRGVsZXRlKHtfaWQ6IHJlcS5xdWVyeS5pZH0pXG4gICAgICAgIHJlcy5zZW5kKHttZXNzYWdlOlwiRGVsZXRlZCBTdWNjZXNzZnVseVwifSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuICByZXMuc3RhdHVzKDQwMCkuanNvbih7bWVzc2FnZTonU29ycnkgc29tZXRoaW5nIHdlbnQgd3JvbmcgISd9KTtcbiAgICB9XG4gICBcbiAgIFxuICB9KSAucHV0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuZmluZE9uZSh7X2lkOiByZXEucXVlcnkuaWR9KVxuICAgICAgICBwb3N0Lm5hbWUgPSByZXEuYm9keS5uYW1lXG4gICAgICAgIHBvc3QudmFsdWU9IHJlcS5ib2R5LnZhbHVlXG4gICAgICAgIHBvc3QucHJpY2U9IE51bWJlcihwb3N0LnZhbHVlKSAvIDEwMDAgKiAxMjUwXG4gICAgICAgIHBvc3QuY29zdD0gTnVtYmVyKHBvc3QudmFsdWUpIC8gMTAwMCAqIDEwNDNcbiAgICAgICAgYXdhaXQgcG9zdC5zYXZlKClcbiAgICAgICAgcmVzLnNlbmQoe3NhdHVzOjIwMCwgIG1lc3NhZ2U6XCJzdWNjZXNzZnVsXCIgLCBjdXN0b21lcjogcG9zdH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6J1NvcnJ5IHNvbWV0aGluZyB3ZW50IHdyb25nICEnfSk7XG4gICAgfVxuXG4gXG4gIH0pIFxuIFxuICBleHBvcnQgZGVmYXVsdCBoYW5kbGVyIl0sIm5hbWVzIjpbIlBvc3QiLCJkYkNvbm5lY3QiLCJuYyIsImhhbmRsZXIiLCJkZWxldGUiLCJyZXEiLCJyZXMiLCJwb3N0cyIsImZpbmRPbmVBbmREZWxldGUiLCJfaWQiLCJxdWVyeSIsImlkIiwic2VuZCIsIm1lc3NhZ2UiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJwdXQiLCJwb3N0IiwiZmluZE9uZSIsIm5hbWUiLCJib2R5IiwidmFsdWUiLCJwcmljZSIsIk51bWJlciIsImNvc3QiLCJzYXZlIiwic2F0dXMiLCJjdXN0b21lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/[id].js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dbConnect)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nasync function dbConnect() {\n    try {\n        await mongoose.connect(\"mongodb+srv://mohammad:123@cluster0.s0eoj.mongodb.net/mydata\", {\n            useUnifiedTopology: true,\n            useNewUrlParser: true\n        });\n        console.log(\"Connected successfully !\");\n    } catch (error) {\n        console.log(\"field connected\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRVQsZUFBZUMsWUFBWTtJQUN2QyxJQUFJO1FBQ0YsTUFBTUYsU0FBU0csT0FBTyxDQUFDLGdFQUN2QjtZQUFDQyxvQkFBbUIsSUFBSTtZQUFHQyxpQkFBZ0IsSUFBSTtRQUFBO1FBRS9DQyxRQUFRQyxHQUFHLENBQUM7SUFFZCxFQUFFLE9BQU9DLE9BQU87UUFDWkYsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215bW9uZ29kYXRhLy4vdXRpbHMvZGJDb25uZWN0LmpzP2MzY2UiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5leHBvcnQgZGVmYXVsdCAgYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiK3NydjovL21vaGFtbWFkOjEyM0BjbHVzdGVyMC5zMGVvai5tb25nb2RiLm5ldC9teWRhdGEnICxcbiAgICAgIHt1c2VVbmlmaWVkVG9wb2xvZ3k6dHJ1ZSAsIHVzZU5ld1VybFBhcnNlcjp0cnVlfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdDb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5ICEnKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJmaWVsZCBjb25uZWN0ZWRcIilcbiAgICB9XG59XG5cbiAiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJyZXF1aXJlIiwiZGJDb25uZWN0IiwiY29ubmVjdCIsInVzZVVuaWZpZWRUb3BvbG9neSIsInVzZU5ld1VybFBhcnNlciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

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
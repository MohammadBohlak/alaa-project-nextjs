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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
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

/***/ "(api)/./pages/api/posts/index.js":
/*!**********************************!*\
  !*** ./pages/api/posts/index.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Post */ \"(api)/./models/Post.js\");\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_2__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst handler = (0,next_connect__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().get(async (req, res)=>{\n    try {\n        const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n        res.send(posts);\n    // res.send({message:\"hellooo\"})\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry something went wrong !\"\n        });\n    }\n}).post(async (req, res)=>{\n    const { name , value  } = req.body;\n    const price = Number(value) / 1000 * 1250;\n    const cost = Number(value) / 1000 * 1043;\n    // console.log(req.body)\n    const newpost = new _models_Post__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n        name,\n        value,\n        price,\n        cost\n    });\n    try {\n        console.log(\"post is \", newpost);\n        await newpost.save();\n        res.send(newpost);\n    // res.send(name)\n    } catch (error) {\n        return res.status(400).json({\n            message: \"Sorry added something went wrong !\"\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUNTO0FBQ1o7QUFFOUJDLDREQUFTQTtBQUdULE1BQU1FLFVBQVVELHdEQUFFQSxHQUFHRSxHQUFHLENBQUMsT0FBTUMsS0FBS0MsTUFBUTtJQUV4QyxJQUFJO1FBQ0EsTUFBTUMsUUFBUSxNQUFNUCx5REFBUyxDQUFDLENBQUM7UUFDL0JNLElBQUlHLElBQUksQ0FBQ0Y7SUFDVCxnQ0FBZ0M7SUFDcEMsRUFBRSxPQUFPRyxPQUFPO1FBQ1osT0FBUUosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFRO1FBQThCO0lBQ3hFO0FBR0YsR0FBR0MsSUFBSSxDQUFDLE9BQU1ULEtBQUtDLE1BQVE7SUFDekIsTUFBTSxFQUFDUyxLQUFJLEVBQUNDLE1BQUssRUFBQyxHQUFHWCxJQUFJWSxJQUFJO0lBQzdCLE1BQU1DLFFBQVFDLE9BQU9ILFNBQVMsT0FBTztJQUNyQyxNQUFNSSxPQUFPRCxPQUFPSCxTQUFTLE9BQU87SUFFcEMsd0JBQXdCO0lBQ3hCLE1BQU1LLFVBQVUsSUFBSXJCLG9EQUFJQSxDQUFDO1FBQUNlO1FBQUtDO1FBQVFFO1FBQVFFO0lBQUk7SUFDbkQsSUFBSTtRQUNBRSxRQUFRQyxHQUFHLENBQUMsWUFBYUY7UUFDeEIsTUFBTUEsUUFBUUcsSUFBSTtRQUNuQmxCLElBQUlHLElBQUksQ0FBQ1k7SUFDVCxpQkFBaUI7SUFDckIsRUFBRSxPQUFPWCxPQUFPO1FBQ1osT0FBUUosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFRO1FBQW9DO0lBQzlFO0FBQ0Y7QUFJQSxpRUFBZVYsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215bW9uZ29kYXRhLy4vcGFnZXMvYXBpL3Bvc3RzL2luZGV4LmpzPzhlNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSBcIkAvbW9kZWxzL1Bvc3RcIjtcbmltcG9ydCBkYkNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJDb25uZWN0XCI7XG5pbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuXG5kYkNvbm5lY3QoKVxuXG5cbmNvbnN0IGhhbmRsZXIgPSBuYygpLmdldChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBQb3N0LmZpbmQoe30pXG4gICAgICAgIHJlcy5zZW5kKHBvc3RzKTtcbiAgICAgICAgLy8gcmVzLnNlbmQoe21lc3NhZ2U6XCJoZWxsb29vXCJ9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21lc3NhZ2U6J1NvcnJ5IHNvbWV0aGluZyB3ZW50IHdyb25nICEnfSk7XG4gICAgfVxuICAgXG4gICBcbiAgfSkucG9zdChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IHtuYW1lLHZhbHVlfSA9IHJlcS5ib2R5XG4gICAgY29uc3QgcHJpY2UgPSBOdW1iZXIodmFsdWUpIC8gMTAwMCAqIDEyNTAgOyBcbiAgICBjb25zdCBjb3N0ID0gTnVtYmVyKHZhbHVlKSAvIDEwMDAgKiAxMDQzXG5cbiAgICAvLyBjb25zb2xlLmxvZyhyZXEuYm9keSlcbiAgICBjb25zdCBuZXdwb3N0ID0gbmV3IFBvc3Qoe25hbWUsdmFsdWUgLCBwcmljZSAsIGNvc3R9KVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBpcyBcIiAsIG5ld3Bvc3QpXG4gICAgICAgICBhd2FpdCBuZXdwb3N0LnNhdmUoKVxuICAgICAgICByZXMuc2VuZChuZXdwb3N0KTtcbiAgICAgICAgLy8gcmVzLnNlbmQobmFtZSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4gIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlOidTb3JyeSBhZGRlZCBzb21ldGhpbmcgd2VudCB3cm9uZyAhJ30pO1xuICAgIH1cbiAgfSlcblxuXG5cbiAgZXhwb3J0IGRlZmF1bHQgaGFuZGxlciJdLCJuYW1lcyI6WyJQb3N0IiwiZGJDb25uZWN0IiwibmMiLCJoYW5kbGVyIiwiZ2V0IiwicmVxIiwicmVzIiwicG9zdHMiLCJmaW5kIiwic2VuZCIsImVycm9yIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwb3N0IiwibmFtZSIsInZhbHVlIiwiYm9keSIsInByaWNlIiwiTnVtYmVyIiwiY29zdCIsIm5ld3Bvc3QiLCJjb25zb2xlIiwibG9nIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/index.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/index.js"));
module.exports = __webpack_exports__;

})();
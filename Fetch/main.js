var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchData = () => __awaiter(this, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();
    console.log(data);
    return data;
});
let button = document.querySelector('.btnInfo');
let paragraph = document.querySelector('.info');
button === null || button === void 0 ? void 0 : button.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
    const data = yield fetchData();
    if (data) {
        paragraph.innerHTML = JSON.stringify(data);
    }
}));

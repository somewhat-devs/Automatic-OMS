(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/hi3":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class SigninComponent {
    constructor() { }
    signinstaff() {
        let staffun = "", staffpw = "";
        staffun = String($('#staffun').val());
        staffpw = String($('#staffpw').val());
        if (staffun == "" || staffpw == "")
            alert("please fill the required fields!");
        else {
            if (staffun == "stf012" && staffpw == "s@12345") {
                let stkn = Math.random().toString().substr(2, 8);
                window.localStorage.setItem('stafftkn', stkn);
                setTimeout(() => {
                    window.location.href = '/staff?p=' + stkn;
                }, 1000);
            }
            else {
                alert("Invalid username / password!");
            }
        }
    }
    signinadmin() {
        let adminun = "", adminpw = "";
        adminun = String($('#adminun').val());
        adminpw = String($('#adminpw').val());
        if (adminun == "" || adminpw == "")
            alert("please fill the required fields!");
        else {
            if (adminun == "admin" && adminpw == "a@12345") {
                let atkn = Math.random().toString().substr(2, 8);
                window.localStorage.setItem('admintkn', atkn);
                setTimeout(() => {
                    window.location.href = '/admin?p=' + atkn;
                }, 1000);
            }
            else {
                alert("Invalid username / password!");
            }
        }
    }
    ngOnInit() {
        $(window).on('load', function () {
            setTimeout(function () {
                $('.splash').fadeOut();
            }, 500);
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 52, vars: 0, consts: [[1, "container"], [1, "splash"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["d", "M20 50A30 30 0 0 0 80 50A30 32 0 0 1 20 50", "fill", "#000000", "stroke", "none"], ["attributeName", "transform", "type", "rotate", "dur", "1s", "repeatCount", "indefinite", "keyTimes", "0;1", "values", "0 50 51;360 50 51"], [1, "row"], [1, "col-lg-12"], ["src", "../../assets/images/signinbg1.svg", "alt", "", 1, "bg1"], ["src", "../../assets/images/signinbg2.svg", "alt", "", 1, "bg2"], ["src", "../../assets/images/beanery name.png", "alt", "", 1, "pglogo"], [1, "signinblk"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#staff", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#admin", 1, "nav-link"], [1, "tab-content"], ["id", "staff", 1, "tab-pane", "fade", "active", "show"], ["id", "staffform", 1, "col", "s12", 3, "submit"], [1, "input-field", "col", "s12"], ["type", "text", "id", "staffun", "name", "staffun"], ["for", "staffun"], ["type", "password", "id", "staffpw", "name", "staffpw"], ["for", "staffpw"], ["type", "submit", 1, "btn", "staffbtn"], ["id", "admin", 1, "tab-pane", "fade"], ["id", "adminform", 1, "col", "s12", 3, "submit"], ["type", "text", "id", "adminun", "name", "adminun"], ["for", "adminun"], ["type", "password", "id", "adminpw", "name", "adminpw"], ["for", "adminpw"], ["type", "submit", 1, "btn", "adminbtn"]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animateTransform", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Staff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SigninComponent_Template_form_submit_25_listener() { return ctx.signinstaff(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Staff Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Staff Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Staff Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "form", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SigninComponent_Template_form_submit_39_listener() { return ctx.signinadmin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Admin Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Admin Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Admin Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".container[_ngcontent-%COMP%] {\r\n\tmargin: -5px -10px;\r\n\tpadding: 0;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tmargin: 0;\r\n\theight: 100%;\r\n\tposition: absolute;\r\n\tbackground-color: rgb(255, 242, 217);\r\n}\r\n\r\n.splash[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tdisplay: block;\r\n\twidth: 101%;\r\n\theight: 101%;\r\n\tbackground-color: #FFE699;\r\n\tz-index: 3;\r\n}\r\n\r\n.splash[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n\tmargin: auto;\r\n\tdisplay: block;\r\n\tshape-rendering: auto;\r\n\twidth: 10%;\r\n\tmargin-top: 18%;\r\n}\r\n\r\n.bg1[_ngcontent-%COMP%], .bg2[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tposition: fixed;\r\n\theight: 101%;\r\n\topacity: 0.9;\r\n}\r\n\r\n.bg1[_ngcontent-%COMP%] {\r\n\tleft: 0;\r\n}\r\n\r\n.bg2[_ngcontent-%COMP%] {\r\n\tright: 0;\r\n}\r\n\r\n.pglogo[_ngcontent-%COMP%] {\r\n\twidth: 16%;\r\n\tmargin-left: 42%;\r\n\tmargin-top: 20px;\r\n}\r\n\r\n.signinblk[_ngcontent-%COMP%] {\r\n\twidth: 30%;\r\n\tmargin-left: 35%;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\ttext-align: center;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n\tborder-color: #fff0 #fff0 #4fbe88 #fff0;\r\n\tborder-bottom-width: 3px;\r\n\tbackground-color: #fff0;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover:not(.active) {\r\n\tborder-color: #fff0 #fff0 #0004 #fff0;\r\n\tborder-bottom-width: 3px;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #000b;\r\n}\r\n\r\nform[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default), input[type=\"password\"][_ngcontent-%COMP%]:not(.browser-default){\r\n\tborder-bottom: 1px solid #0008;\r\n\tbox-shadow: 0 1px 0 0 #0008;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=\"password\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]){\r\n\tborder-bottom: 1px solid #000b;\r\n\tbox-shadow: 0 1px 0 0 #000b;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%] {\r\n\tcolor: #000b;\r\n}\r\n\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=\"password\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%] {\r\n\tcolor: #000b;\r\n}\r\n\r\n.staffbtn[_ngcontent-%COMP%], .adminbtn[_ngcontent-%COMP%] {\r\n\twidth: 40%;\r\n\tbackground: #4fbe88;\r\n\tborder-color: #4fbe88;\r\n\tmargin-left: 30%;\r\n\tmargin-top: 30px;\r\n\tcolor: #fff;\r\n}\r\n\r\n.staffbtn[_ngcontent-%COMP%]:hover, .adminbtn[_ngcontent-%COMP%]:hover {\r\n    background-color: #4fbe88;\r\n    border-color: #5a926e;\r\n    color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxTQUFTO0NBQ1QsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLFVBQVU7Q0FDVixlQUFlO0FBQ2hCOztBQUdBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixZQUFZO0NBQ1osWUFBWTtBQUNiOztBQUVBO0NBQ0MsT0FBTztBQUNSOztBQUVBO0NBQ0MsUUFBUTtBQUNUOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHVDQUF1QztDQUN2Qyx3QkFBd0I7Q0FDeEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MscUNBQXFDO0NBQ3JDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFHQTs7Q0FFQyw4QkFBOEI7Q0FFOUIsMkJBQTJCO0FBQzVCOztBQUdBOztDQUVDLDhCQUE4QjtDQUU5QiwyQkFBMkI7QUFDNUI7O0FBRUE7O0NBRUMsWUFBWTtBQUNiOztBQUVBOztDQUVDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2YiLCJmaWxlIjoic2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHRtYXJnaW46IC01cHggLTEwcHg7XHJcblx0cGFkZGluZzogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lciA+IC5yb3cge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG1hcmdpbjogMDtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0MiwgMjE3KTtcclxufVxyXG5cclxuLnNwbGFzaCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDElO1xyXG5cdGhlaWdodDogMTAxJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNjk5O1xyXG5cdHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5zcGxhc2ggc3ZnIHtcclxuXHRtYXJnaW46IGF1dG87XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0c2hhcGUtcmVuZGVyaW5nOiBhdXRvO1xyXG5cdHdpZHRoOiAxMCU7XHJcblx0bWFyZ2luLXRvcDogMTglO1xyXG59XHJcblxyXG5cclxuLmJnMSwgLmJnMiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGhlaWdodDogMTAxJTtcclxuXHRvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5iZzEge1xyXG5cdGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5iZzIge1xyXG5cdHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ucGdsb2dvIHtcclxuXHR3aWR0aDogMTYlO1xyXG5cdG1hcmdpbi1sZWZ0OiA0MiU7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnNpZ25pbmJsayB7XHJcblx0d2lkdGg6IDMwJTtcclxuXHRtYXJnaW4tbGVmdDogMzUlO1xyXG59XHJcblxyXG4ubmF2LXRhYnMgLm5hdi1pdGVtIHtcclxuXHR3aWR0aDogNTAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG5cdGJvcmRlci1jb2xvcjogI2ZmZjAgI2ZmZjAgIzRmYmU4OCAjZmZmMDtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjA7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuXHRib3JkZXItY29sb3I6ICNmZmYwICNmZmYwICMwMDA0ICNmZmYwO1xyXG5cdGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcclxufVxyXG5cclxuLm5hdi10YWJzIGEge1xyXG5cdGNvbG9yOiAjMDAwYjtcclxufVxyXG5cclxuZm9ybSA+IC5yb3cge1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgIzAwMDg7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCAwICMwMDA4O1xyXG59XHJcblxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcclxuaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSl7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDBiO1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICMwMDBiO1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDAwYjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpub3QoLmJyb3dzZXItZGVmYXVsdCkgKyBsYWJlbCB7XHJcblx0Y29sb3I6ICMwMDBiO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xyXG5cdGNvbG9yOiAjMDAwYjtcclxufVxyXG5cclxuLnN0YWZmYnRuLCAuYWRtaW5idG4ge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0YmFja2dyb3VuZDogIzRmYmU4ODtcclxuXHRib3JkZXItY29sb3I6ICM0ZmJlODg7XHJcblx0bWFyZ2luLWxlZnQ6IDMwJTtcclxuXHRtYXJnaW4tdG9wOiAzMHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc3RhZmZidG46aG92ZXIsIC5hZG1pbmJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZiZTg4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNWE5MjZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\colly\SEM 8\Final project\automaticOMS\client\src\main.ts */"zUnb");


/***/ }),

/***/ "0RKa":
/*!*****************************************!*\
  !*** ./src/app/transactions.service.ts ***!
  \*****************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class TransactionsService {
    constructor(http) {
        this.http = http;
        this.baseurl = "https://automatic-oms.herokuapp.com";
    }
    getTrans() {
        return this.http.get(this.baseurl + "/api/transactions");
    }
    addTrans(newTrans) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/transaction', newTrans, { headers: headers });
    }
    deleteTrans(id) {
        return this.http.delete(this.baseurl + '/api/transaction/' + id);
    }
}
TransactionsService.ɵfac = function TransactionsService_Factory(t) { return new (t || TransactionsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
TransactionsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TransactionsService, factory: TransactionsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "15T6":
/*!**********************************!*\
  !*** ./src/app/items.service.ts ***!
  \**********************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ItemsService {
    constructor(http) {
        this.http = http;
        this.baseurl = "https://automatic-oms.herokuapp.com";
    }
    getMenu() {
        return this.http.get(this.baseurl + "/api/items");
    }
    addItem(newItem) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/item', newItem, { headers: headers });
    }
    udtavail(udtItem) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/udtavail', udtItem, { headers: headers });
    }
    updateitem(udtItem) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/updateitem', udtItem, { headers: headers });
    }
}
ItemsService.ɵfac = function ItemsService_Factory(t) { return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ItemsService, factory: ItemsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "4yXv":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../customers.service */ "niAj");
/* harmony import */ var _tokens_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tokens.service */ "xloE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class CustomersComponent {
    constructor(customersService, tokensService) {
        this.customersService = customersService;
        this.tokensService = tokensService;
    }
    addCustomer() {
        this.cust_ordertype = String($('input:radio[name=ordertype]:checked').val());
        if (this.cust_name == null || this.cust_mobno == "" || $('input:radio:checked').val() == undefined) {
            alert("Please fill all the required details.");
        }
        else {
            let date = new Date();
            let tok;
            this.tokensService.getTokcount()
                .subscribe((token) => {
                let count = (token.count + '').padStart(3, '0');
                tok = token.token_date + "-" + count;
                const newCust = {
                    name: this.cust_name,
                    mobileno: this.cust_mobno,
                    token: tok,
                    table_no: ($('#tblno').val() == "") ? 0 : Number($('#tblno').val()),
                    arrival_time: date,
                    status: "active",
                    order_type: this.cust_ordertype,
                    transaction_id: "",
                };
                this.customersService.addCust(newCust)
                    .subscribe((custs) => {
                    let custid = custs._id + ((Math.round(Math.random() * 100000)).toString());
                    window.localStorage.setItem('custid', custs._id);
                    window.location.href = '/menu?p=' + custid;
                    // console.log(custs);
                });
            });
        }
    }
    ngOnInit() {
        // console.log(window.localStorage.getItem('custid'));
        if (window.screen.width > 500) {
            alert("Please access this page through mobile!");
            window.location.href = "https://google.com";
        }
        $(window).on('load', function () {
            setTimeout(function () {
                $('.splash').fadeOut();
            }, 500);
        });
    }
}
CustomersComponent.ɵfac = function CustomersComponent_Factory(t) { return new (t || CustomersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_customers_service__WEBPACK_IMPORTED_MODULE_0__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_tokens_service__WEBPACK_IMPORTED_MODULE_1__["TokensService"])); };
CustomersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CustomersComponent, selectors: [["app-customers"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([
            _customers_service__WEBPACK_IMPORTED_MODULE_0__["CustomersService"],
            _tokens_service__WEBPACK_IMPORTED_MODULE_1__["TokensService"]
        ])], decls: 43, vars: 3, consts: [[1, "container"], [1, "splash", 2, "display", "block"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["d", "M20 50A30 30 0 0 0 80 50A30 32 0 0 1 20 50", "fill", "#000000", "stroke", "none"], ["attributeName", "transform", "type", "rotate", "dur", "1s", "repeatCount", "indefinite", "keyTimes", "0;1", "values", "0 50 51;360 50 51"], [1, "row"], [1, "col-12"], ["src", "../../assets/images/beanery name.png", "alt", "", 1, "pglogo"], [1, "tagline"], [1, "formdiv"], [3, "submit"], [1, "input-field", "col", "s12"], ["type", "text", "name", "custname", "id", "custname", "required", "", 3, "ngModel", "ngModelChange"], ["for", "custname"], ["type", "text", "name", "mobile", "id", "mobile", "required", "", 3, "ngModel", "ngModelChange"], ["for", "mobile"], [1, "col", "s12", "odrrow"], ["name", "ordertype", "type", "radio", "id", "odrdinein", "value", "dinein", 1, "with-gap"], [1, "odrtk"], ["name", "ordertype", "type", "radio", "id", "odrtakeaway", "value", "takeaway", 1, "with-gap"], ["type", "number", "name", "tblno", "id", "tblno", 3, "ngModel", "ngModelChange"], ["for", "tblno"], ["type", "submit", 1, "btn"]], template: function CustomersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "animateTransform", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Did Somebody ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Say food?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function CustomersComponent_Template_form_submit_17_listener() { return ctx.addCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomersComponent_Template_input_ngModelChange_19_listener($event) { return ctx.cust_name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Your Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomersComponent_Template_input_ngModelChange_23_listener($event) { return ctx.cust_mobno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Mobile no. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " Order Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Dine-In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Take Away");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CustomersComponent_Template_input_ngModelChange_38_listener($event) { return ctx.cust_tabno = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, " Table no. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.cust_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.cust_mobno);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.cust_tabno);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["@font-face {\r\n\tfont-family: cookie;\r\n\tsrc: url('cookie.ttf');\r\n}\r\n@font-face {\r\n\tfont-family: nunito;\r\n\tsrc: url('nunito.ttf');\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tpadding: 0;\t\r\n\theight: 100%;\r\n\tposition: relative;\r\n\tbackground: url('custbg1.png') top right no-repeat, url('custbg2.png') bottom right no-repeat;\r\n\tbackground-size: contain;\r\n\tbackground-color: #ffe699;\r\n\tmin-height: 760px;\r\n}\r\n.container[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n}\r\n.splash[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #FFE699;\r\n\tz-index: 3;\r\n}\r\n.splash[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n\tmargin: auto;\r\n\tdisplay: block;\r\n\tshape-rendering: auto;\r\n\twidth: 30%;\r\n\tmargin-top: 70%;\r\n}\r\n.col-12[_ngcontent-%COMP%] {\r\n    display: block;\r\n\tpadding: 10px 15px;\r\n\tposition: relative;\r\n}\r\n.bg1[_ngcontent-%COMP%], .bg2[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tleft: 0;\r\n}\r\n.bg1[_ngcontent-%COMP%] {\r\n\ttop: 0;\r\n\tleft: 5rem;\r\n}\r\n.bg2[_ngcontent-%COMP%] {\r\n\tbottom: 0;\r\n}\r\n.pglogo[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tdisplay: block;\r\n\tposition: relative;\r\n}\r\n.tagline[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tfont-size: 2.5rem;\r\n\tmargin-left: 5%;\r\n\tpadding: 2% 0;\r\n\tfont-style: italic;\r\n\tfont-family: cookie, \"Segoe UI\";\r\n\ttext-shadow: 1px 1px 5px #888;\r\n}\r\n.formdiv[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tmargin-bottom: 70px;\r\n\tdisplay: flex;\r\n}\r\n.formdiv[_ngcontent-%COMP%]    > form[_ngcontent-%COMP%] {\r\n\tbackground: #4fbe8888;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2);\r\n\tpadding: 1.5rem 1rem;\r\n\tfont-family: nunito, \"Segoe UI\";\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default), input[type=\"number\"][_ngcontent-%COMP%]:not(.browser-default){\r\n\tborder-bottom: 1px solid #0008;\r\n\tbox-shadow: 0 1px 0 0 #0008;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=\"number\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]){\r\n\tborder-bottom: 1px solid #0008;\r\n\tbox-shadow: 0 1px 0 0 #0008;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n\tcolor: #000b;\r\n}\r\n.input-field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n\tcolor: #000b;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=\"number\"][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%] {\r\n\tcolor: #000b;\r\n}\r\n[type=\"radio\"].with-gap[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::before, [type=\"radio\"].with-gap[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::after {\r\n    border: 2px solid #5b91f4;\r\n}\r\n[type=\"radio\"].with-gap[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::after {\r\n    background-color: #5b91f4;\r\n}\r\n[type=\"radio\"].with-gap[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::before, [type=\"radio\"].with-gap[_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%]::after {\r\n    border: 2px solid #5b91f4;\r\n}\r\n[type=\"radio\"][_ngcontent-%COMP%]:not(:checked)    + span[_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%]:checked    + span[_ngcontent-%COMP%] {\r\n    padding-left: 25px;\r\n}\r\n.odrrow[_ngcontent-%COMP%] {\r\n\tmargin: 1rem 0;\r\n}\r\n.odrtk[_ngcontent-%COMP%] {\r\n\tmargin-left: 15px;\r\n\tmargin-top: 10px;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n\twidth: 40%;\r\n\tmargin: 0.8rem 30%;\r\n\tbackground: #5b91f4;\r\n\tborder-color: #5b91f4;\r\n\tcolor: #fff;\r\n\tbox-shadow: 0px 1px 5px 1px gray;\r\n\tfont-size: 1.2rem;\r\n}\r\n.btn[_ngcontent-%COMP%]:focus {\r\n    box-shadow: 0 0 0 .2rem #1e54b7;\r\n\tbackground-color: #5b91f4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUF3QztBQUN6QztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLHNCQUF3QztBQUN6QztBQUVBO0NBQ0MsV0FBVztDQUNYLFVBQVU7Q0FDVixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLDZGQUFxSTtDQUNySSx3QkFBd0I7Q0FDeEIseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsU0FBUztBQUNWO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLFdBQVc7Q0FDWCxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLFVBQVU7QUFDWDtBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGVBQWU7QUFDaEI7QUFFQTtJQUNJLGNBQWM7Q0FDakIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtBQUNuQjtBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixXQUFXO0NBQ1gsT0FBTztBQUNSO0FBRUE7Q0FDQyxNQUFNO0NBQ04sVUFBVTtBQUNYO0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7QUFFQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0NBQ2Qsa0JBQWtCO0FBQ25CO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQiw2QkFBNkI7QUFDOUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQix3Q0FBd0M7Q0FDeEMsb0JBQW9CO0NBQ3BCLCtCQUErQjtBQUNoQztBQUVBOztDQUVDLDhCQUE4QjtDQUU5QiwyQkFBMkI7QUFDNUI7QUFFQTs7Q0FFQyw4QkFBOEI7Q0FFOUIsMkJBQTJCO0FBQzVCO0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUVBOztDQUVDLFlBQVk7QUFDYjtBQUVBOztJQUVJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUkseUJBQXlCO0FBQzdCO0FBQ0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFVBQVU7Q0FDVixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsZ0NBQWdDO0NBQ2hDLGlCQUFpQjtBQUNsQjtBQUVBO0lBQ0ksK0JBQStCO0NBQ2xDLHlCQUF5QjtBQUMxQiIsImZpbGUiOiJjdXN0b21lcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG5cdGZvbnQtZmFtaWx5OiBjb29raWU7XHJcblx0c3JjOiB1cmwoJy4uLy4uL2Fzc2V0cy9mb250L2Nvb2tpZS50dGYnKTtcclxufVxyXG5AZm9udC1mYWNlIHtcclxuXHRmb250LWZhbWlseTogbnVuaXRvO1xyXG5cdHNyYzogdXJsKCcuLi8uLi9hc3NldHMvZm9udC9udW5pdG8udHRmJyk7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDA7XHRcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9jdXN0YmcxLnBuZycpIHRvcCByaWdodCBuby1yZXBlYXQsIHVybCgnLi4vLi4vYXNzZXRzL2ltYWdlcy9jdXN0YmcyLnBuZycpIGJvdHRvbSByaWdodCBuby1yZXBlYXQ7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmU2OTk7XHJcblx0bWluLWhlaWdodDogNzYwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIgPiAucm93IHtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zcGxhc2gge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRTY5OTtcclxuXHR6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uc3BsYXNoIHN2ZyB7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHNoYXBlLXJlbmRlcmluZzogYXV0bztcclxuXHR3aWR0aDogMzAlO1xyXG5cdG1hcmdpbi10b3A6IDcwJTtcclxufVxyXG5cclxuLmNvbC0xMiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmcxLCAuYmcyIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bGVmdDogMDtcclxufVxyXG5cclxuLmJnMSB7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDVyZW07XHJcbn1cclxuXHJcbi5iZzIge1xyXG5cdGJvdHRvbTogMDtcclxufVxyXG5cclxuLnBnbG9nbyB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi50YWdsaW5lIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Zm9udC1zaXplOiAyLjVyZW07XHJcblx0bWFyZ2luLWxlZnQ6IDUlO1xyXG5cdHBhZGRpbmc6IDIlIDA7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljO1xyXG5cdGZvbnQtZmFtaWx5OiBjb29raWUsIFwiU2Vnb2UgVUlcIjtcclxuXHR0ZXh0LXNoYWRvdzogMXB4IDFweCA1cHggIzg4ODtcclxufVxyXG5cclxuLmZvcm1kaXYge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5mb3JtZGl2ID4gZm9ybSB7XHJcblx0YmFja2dyb3VuZDogIzRmYmU4ODg4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3gtc2hhZG93OiAwIDAgMXJlbSAwIHJnYmEoMCwgMCwgMCwgLjIpO1xyXG5cdHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xyXG5cdGZvbnQtZmFtaWx5OiBudW5pdG8sIFwiU2Vnb2UgVUlcIjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KXtcclxuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiAwIDFweCAwIDAgIzAwMDg7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMCAwICMwMDA4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSl7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA4O1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICMwMDA4O1xyXG5cdGJveC1zaGFkb3c6IDAgMXB4IDAgMCAjMDAwODtcclxufVxyXG5cclxubGFiZWwge1xyXG5cdGNvbG9yOiAjMDAwYjtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkID4gbGFiZWwge1xyXG5cdGNvbG9yOiAjMDAwYjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCB7XHJcblx0Y29sb3I6ICMwMDBiO1xyXG59XHJcblxyXG5bdHlwZT1cInJhZGlvXCJdLndpdGgtZ2FwOmNoZWNrZWQgKyBzcGFuOjpiZWZvcmUsIFxyXG5bdHlwZT1cInJhZGlvXCJdLndpdGgtZ2FwOmNoZWNrZWQgKyBzcGFuOjphZnRlciB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNWI5MWY0O1xyXG59XHJcblt0eXBlPVwicmFkaW9cIl0ud2l0aC1nYXA6Y2hlY2tlZCArIHNwYW46OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjkxZjQ7XHJcbn1cclxuW3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkICsgc3Bhbjo6YmVmb3JlLCBcclxuW3R5cGU9XCJyYWRpb1wiXS53aXRoLWdhcDpjaGVja2VkICsgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzViOTFmNDtcclxufVxyXG5bdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBzcGFuLCBcclxuW3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgc3BhbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5vZHJyb3cge1xyXG5cdG1hcmdpbjogMXJlbSAwO1xyXG59XHJcblxyXG4ub2RydGsge1xyXG5cdG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG5cdHdpZHRoOiA0MCU7XHJcblx0bWFyZ2luOiAwLjhyZW0gMzAlO1xyXG5cdGJhY2tncm91bmQ6ICM1YjkxZjQ7XHJcblx0Ym9yZGVyLWNvbG9yOiAjNWI5MWY0O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDFweCBncmF5O1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG4uYnRuOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIC4ycmVtICMxZTU0Yjc7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzViOTFmNDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "TGkX":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items.service */ "15T6");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customers.service */ "niAj");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../orders.service */ "frVr");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transactions.service */ "0RKa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");












function MenuComponent_ng_container_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u20B9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card ", item_r1.category, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("id", "i-", item_r1._id, "");
} }
class MenuComponent {
    constructor(itemsService, customersService, ordersService, transactionsService, activRoute) {
        this.itemsService = itemsService;
        this.customersService = customersService;
        this.ordersService = ordersService;
        this.transactionsService = transactionsService;
        this.activRoute = activRoute;
    }
    ngOnInit() {
        if (window.screen.width > 500) {
            alert("Please access this page through mobile!");
            window.location.href = "https://google.com";
        }
        this.activRoute.queryParams.subscribe(params => {
            this.custid = params.p.substr(0, 24);
            if (window.localStorage.getItem('custid') == null)
                window.location.href = '/customers';
            else {
                if (window.localStorage.getItem('custid') != this.custid)
                    window.location.href = '/customers';
                else {
                    $(window).on('load', function () {
                        setTimeout(function () {
                            $('.splash').fadeOut();
                        }, 1000);
                    });
                }
            }
            this.customersService.getCust(this.custid)
                .subscribe((cust) => {
                this.cust_name = cust.name.split(" ")[0];
                this.cust_mobno = cust.mobileno;
                this.cust_tokenno = cust.token;
                this.cust_tabno = cust.table_no;
                // console.log(cust);
            });
        });
        this.itemsService.getMenu()
            .subscribe((items) => {
            this.items = items;
            // console.log(items);
        });
        // addorder adds new order into db or add new order items to existing order into db 
        const addorder = ((order, fl) => {
            if (fl) {
                // console.log('order - ', order);
                this.ordersService.addOrder(order)
                    .subscribe((order) => {
                    $('.cartitems .card.wait').each(function (i, e) {
                        $(e).find('.cartstsval').toggleClass('prep wait');
                        $(e).find('.cartstsval').text('preparing');
                        let qty = $(e).find('.qtyval').text();
                        $(e).find('.qty-grp').html("<span class=\"qtyval\" style=\"width: 100%; text-align: center;\">" + qty + "</span>");
                        $(e).toggleClass('prep wait');
                    });
                    $('#preptime').text("20");
                    // console.log('order added!');
                });
            }
            else {
                // console.log('reorder - ', order);
                this.ordersService.reOrder(order)
                    .subscribe((order) => {
                    $('.cartitems .card.wait').each(function (i, e) {
                        $(e).find('.cartstsval').toggleClass('prep wait');
                        $(e).find('.cartstsval').text('preparing');
                        let qty = $(e).find('.qtyval').text();
                        $(e).find('.qty-grp').html("<span class=\"qtyval\" style=\"width: 100%; text-align: center;\">" + qty + "</span>");
                        $(e).toggleClass('prep wait');
                    });
                    // console.log(order);
                    // console.log('order refreshed!');
                });
            }
        });
        // udtstatus updates the status of each item of the order
        const udtstatus = (() => {
            let tknstatus;
            setInterval(() => {
                tknstatus = { tkn: "", subtotal: 0, grandtotal: 0, itemarr: [] };
                tknstatus.tkn = this.cust_tokenno;
                tknstatus.subtotal = Number($('#carttotalval').text());
                tknstatus.grandtotal = Number($('#grdtotalval').text());
                if ($('.cartitems .card.cncl').length > 0) {
                    $('.cartitems .card.cncl').each(function (i, e) {
                        let id = String($(e).attr("id"));
                        id = id.substring(id.indexOf('-') + 1);
                        tknstatus.itemarr.push(id);
                    });
                }
                // console.log('tknstatus- ',tknstatus);
                this.ordersService.updatestatuscust(tknstatus)
                    .subscribe((res) => {
                    // console.log("udt cust res-",res); 
                    if (!(res.preptime == "undefined" || res.preptime == null))
                        $('#preptime').html(res.preptime);
                    res.itemarr.forEach((item) => {
                        let i = $('#cartitem-' + item.item_id);
                        switch (item.status) {
                            case "otw":
                                i.find('.cartstsval').removeClass('prep').addClass('otw');
                                i.find('.cartstsval').text('on the way');
                                break;
                            case "serv":
                                i.find('.cartstsval').removeClass('prep otw').addClass('serv');
                                i.find('.cartstsval').text('served');
                                break;
                            default:
                                return;
                        }
                    });
                });
            }, 4000);
        });
        $(function () {
            $(document).on('click', '#menubtn', function () {
                $('.menumain').animate({ marginLeft: '0%', opacity: 1 }, { duration: 500, easing: 'swing', queue: false });
                $('.cartmain').animate({ marginLeft: '100%', opacity: 0 }, { duration: 500, easing: 'swing', queue: false });
                $('#cartbtn').toggleClass('active');
                $(this).toggleClass('active');
            });
            $(document).on('click', '#cartbtn', function () {
                $('.menumain').animate({ marginLeft: '-100%', opacity: 0 }, { duration: 500, easing: 'swing', queue: false });
                $('.cartmain').animate({ marginLeft: '0%', opacity: 1 }, { duration: 500, easing: 'swing', queue: false });
                $('#menubtn').toggleClass('active');
                $(this).toggleClass('active');
            });
            $(document).on('click', '.itembtn', function () {
                let ntr = $('.cartitems .card').length + 1;
                let id = $(this).attr("id");
                id = id.substring(id.indexOf('-') + 1);
                let cname = $(this)[0].attributes[0].name;
                let title = $(this).parent().parent().find('.itemtitle').text();
                let price = $(this).parent().parent().find('.itemprcval').text();
                let categ = $(this).parent().parent().find('.itemcateg').text();
                let itemcard = "<div id=\"cartitem-" + id + "_" + ntr + "\" class=\"card " + categ + " wait\"" + cname + "=\"\">" +
                    "<div class=\"col-6\" " + cname + "=\"\">" +
                    "<p class=\"cartitem\" " + cname + "=\"\">" + title + "</p>" +
                    "<span class=\"cartprc\" " + cname + "=\"\">&#8377; <span class=\"cartprcval\" " + cname + "=\"\">" + (Number(price)).toFixed(2) + "</span></span>" +
                    "<p class=\"cartsts\" " + cname + "=\"\">status: <span class=\"cartstsval wait\" " + cname + "=\"\">waiting</span></p>" +
                    "</div>" +
                    "<div class=\"col-3\" " + cname + "=\"\">" +
                    "<span class=\"itemtprc\" " + cname + "=\"\">&#8377; <span class=\"itemtprcval\" " + cname + "=\"\">" + (Number(price)).toFixed(2) + "</span></span>" +
                    "<div class=\"input-group qty-grp\" " + cname + "=\"\">" +
                    "<button class=\"btn qtybtn qtydec-btn\" " + cname + "=\"\">-</button>" +
                    "<span class=\"qtyval\" " + cname + "=\"\">1</span>" +
                    "<button class=\"btn qtybtn qtyinc-btn\" " + cname + "=\"\">+</button>" +
                    "</div>" +
                    "</div>" +
                    "<div class=\"col-3 rmvcol\" " + cname + "=\"\">" +
                    "<img class=\"cartrmv-btn\" src=\"../../assets/images/clear.png\" alt=\"\" " + cname + "=\"\">" +
                    "<p class=\"cartrmv-txt cncltimer\" " + cname + "=\"\">20</p>" +
                    "</div>" +
                    "</div>";
                $('.emptycart').hide();
                $(itemcard).insertBefore('.emptycart');
                $('.carttime').css('display', 'block');
                $('.cartbtns').css('display', 'flex');
                var cncltimer = $('.card#cartitem-' + id + '_' + ntr + ' .cncltimer');
                $('#cartbtn span').toggleClass('inititem');
                setTimeout(() => {
                    $('#cartbtn span').toggleClass('inititem');
                }, 3000);
                var t = setInterval(() => {
                    cncltimer.text(Number(cncltimer.text()) - 1);
                    if (Number(cncltimer.text()) - 1 < 0) {
                        clearInterval(t);
                        cncltimer.parent().addClass('disbl');
                        cncltimer.text("");
                    }
                }, 1000);
                caltotal();
            });
            $(document).on("click", '.qtyinc-btn', function () {
                let q = $(this).prev('span').text();
                $(this).prev('span').text(Number(q) + 1);
                qtychanged($(this).parent().parent().parent());
            });
            $(document).on("click", '.qtydec-btn', function () {
                let q = Number($(this).next('span').text());
                if (!(q <= 1)) {
                    $(this).next('span').text(Number(q) - 1);
                    qtychanged($(this).parent().parent().parent());
                }
            });
            function qtychanged(card) {
                let prc = card.find('.cartprcval').text();
                let qty = card.find('.qtyval').text();
                card.find('.itemtprcval').text((prc * qty).toFixed(2));
                caltotal();
            }
            ;
            function caltotal() {
                var carttotal = 0;
                $('.cartitems .card').not('.cncl').each(function (i, e) {
                    carttotal += parseFloat($(e).find('.itemtprcval').text());
                });
                $('#carttotalval').text((carttotal).toFixed(2));
                $('#grdtotalval').text((carttotal + carttotal * 0.05).toFixed(2));
            }
            $(document).on('click', '.rmvcol:not(.disbl)', function () {
                let card = $(this).parent();
                card.find('.cncltimer').parent().addClass('disbl');
                card.find('.cncltimer').text("");
                card.removeClass('wait prep otw serv').addClass('cncl');
                card.find('.cartstsval').removeClass('wait prep otw serv').addClass('cncl');
                card.find('.cartstsval').text('canceled');
                let qty = card.find('.qtyval').text();
                card.find('.qty-grp').html("<span class=\"qtyval\" style=\"width: 100%; text-align: center;\">" + qty + "</span>");
                caltotal();
            });
            $(document).on('click', '#order-btn', function () {
                let itemarr = [];
                $('.cartitems .card').each(function (i, e) {
                    var _a;
                    let id = $(e).attr("id");
                    id = id.substring(id.indexOf('-') + 1);
                    let qty = Number($(e).find('.qtyval').text());
                    itemarr.push({
                        "item_id": id,
                        "item": $(e).find('.cartitem').text().trim(),
                        "qty": qty,
                        "status": (_a = $(e).find('.cartstsval').attr("class")) === null || _a === void 0 ? void 0 : _a.split(" ")[1]
                    });
                });
                if (!($(this).hasClass('initd'))) {
                    let date = new Date();
                    const order = {
                        order_token: $('#cust_tokenno').text(),
                        customer_id: $('#custid').text(),
                        created_at: date,
                        order_status: "active",
                        table_no: Number($('#cust_tabno').text()),
                        preptime: "20",
                        discount: 0,
                        tax: 5,
                        subtotal: Number($('#carttotalval').text()),
                        grandtotal: Number($('#grdtotalval').text()),
                        order_item: itemarr,
                        feedback: 0,
                        comment: ""
                    };
                    addorder(order, true);
                    $(this).addClass('initd');
                    setTimeout(() => {
                        udtstatus();
                    }, 4000);
                }
                else {
                    const reorder = {
                        order_token: $('#cust_tokenno').text(),
                        subtotal: Number($('#carttotalval').text()),
                        grandtotal: Number($('#grdtotalval').text()),
                        order_item: itemarr
                    };
                    addorder(reorder, false);
                }
            });
            $(document).on('click', '.paym-back', function () {
                $('.paymain').fadeOut();
            });
            $(document).on('click', '#pay-btn', function () {
                if (confirm("Are you sure, you want to continue?")) {
                    $('#carttotalval-mod').text($('#carttotalval').text());
                    $('#grdtotalval-mod').text($('#grdtotalval').text());
                    $('.paymain').fadeIn();
                }
            });
            $(document).on('click', '.paym-btn', function () {
                let paymode = $('input:radio[name="paymode"]:checked').val();
                if (paymode == undefined) {
                    alert("Please choose any one value!");
                }
                else {
                    const trans = {
                        customer_id: $('#custid').text(),
                        order_token: $('#cust_tokenno').text(),
                        payment_mode: paymode,
                        amount: $('#grdtotalval').text()
                    };
                    addtrans(trans);
                    $('.paymain').fadeOut(function () {
                        $('.revwmain').fadeIn();
                    });
                }
            });
            $(document).on('click', '.revw-btn', function () {
                let paymode = $('input:radio[name="paymode"]:checked').val();
                let rating = $('input:radio[name="rating"]:checked').val();
                if (rating == undefined) {
                    alert("Please provide some feedback!");
                }
                else {
                    const fdbk = {
                        order_token: $('#cust_tokenno').text(),
                        feedback: rating,
                        comment: (($('#comment').val() != "") ? $('#comment').val() : "")
                    };
                    addfdbk(fdbk, paymode);
                }
            });
        });
        const addtrans = ((newtrans) => {
            this.transactionsService.addTrans(newtrans)
                .subscribe((res) => {
                // console.log("trans res",res);
            });
        });
        const addfdbk = ((fdbk, paymode) => {
            this.ordersService.addfeedback(fdbk)
                .subscribe((res) => {
                // console.log(res);
                window.localStorage.removeItem('custid');
                if (paymode == "online") {        
          	    window.location.href = '/customers';
          	    window.open('https://m.p-y.tm/', '_blank');  
        	}
                else
                    window.location.href = '/customers';
            });
        });
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_items_service__WEBPACK_IMPORTED_MODULE_0__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_transactions_service__WEBPACK_IMPORTED_MODULE_3__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([_items_service__WEBPACK_IMPORTED_MODULE_0__["ItemsService"], _customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"], _orders_service__WEBPACK_IMPORTED_MODULE_2__["OrdersService"], _transactions_service__WEBPACK_IMPORTED_MODULE_3__["TransactionsService"]])], decls: 177, vars: 8, consts: [[1, "container"], [1, "splash"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["d", "M20 50A30 30 0 0 0 80 50A30 32 0 0 1 20 50", "fill", "#000000", "stroke", "none"], ["attributeName", "transform", "type", "rotate", "dur", "1s", "repeatCount", "indefinite", "keyTimes", "0;1", "values", "0 50 51;360 50 51"], [1, "row"], [1, "col-12"], [1, "row", "banner"], [1, "col-9"], [1, "ln1"], [1, "ln2"], ["id", "custid", "hidden", ""], [1, "ln3"], ["id", "cust_tokenno"], [1, "tblno"], ["id", "cust_tabno"], [1, "col-3"], ["id", "top-logo", "src", "../../assets/images/menu_toplogo.png", "alt", "top-logo"], [1, "optbtn"], ["src", "../../assets/images/option.png", "alt", ""], [1, "helpbtn"], ["src", "../../assets/images/help.png", "alt", ""], [1, "row", "menulist"], [1, "menumain"], ["type", "text", "placeholder", "Search...", 1, "form-control", "srch-inp"], [1, "menuopt"], ["for", "menufilter"], ["id", "menufilter", 1, "form-control"], ["for", "menusort"], ["id", "menusort", 1, "form-control"], [1, "menuitems"], [4, "ngFor", "ngForOf"], [1, "menucateg"], [1, "cateitems", "active"], [1, "cateitems"], [1, "cartmain"], [1, "carttime"], ["id", "preptime", 1, "carttimeval"], [1, "cartitems"], [1, "emptycart"], ["src", "../../assets/images/emptycart.png", "alt", "", 1, "emptycartimg"], [1, "row", "cartbtns"], [1, "cartpaym-hd"], [1, "cartpaym-dtl"], ["id", "carttotalval"], [1, "cartpaym-gt"], ["id", "grdtotalval"], [1, "cartpaym"], [1, "col-6"], ["id", "pay-btn", 1, "btn", "btn-sm", "payout"], ["id", "order-btn", 1, "btn", "btn-sm", "tocart"], [1, "row", "footer"], ["id", "menubtn", 1, "col-6", "active"], ["src", "../../assets/images/menu.png", 1, "ftrimg"], ["id", "cartbtn", 1, "col-6"], ["src", "../../assets/images/cart.png", 1, "ftrimg"], [1, "row", "paymain"], [1, "col-lg-12"], ["id", "paymain-logo", "src", "../../assets/images/payment.png", "alt", ""], [1, "paym-fs"], [1, "paym-fl"], [1, "paym-hd"], [1, "paym-dtl"], ["id", "carttotalval-mod"], [1, "paym-gt"], ["id", "grdtotalval-mod"], [1, "paym-rdio"], ["type", "radio", "name", "paymode", "id", "paymode-cash", "value", "cash", 1, "with-gap"], ["type", "radio", "name", "paymode", "id", "paymode-online", "value", "online", 1, "with-gap"], ["src", "../../assets/images/back.png", "alt", "", 1, "paym-back"], [1, "btn", "paym-btn"], [1, "row", "revwmain"], ["id", "revwmain-logo", "src", "../../assets/images/review.png", "alt", ""], [1, "revw-strs"], [1, "star-rating"], ["type", "radio", "name", "rating", "value", "1"], ["type", "radio", "name", "rating", "value", "2"], ["type", "radio", "name", "rating", "value", "3"], ["type", "radio", "name", "rating", "value", "4"], ["type", "radio", "name", "rating", "value", "5"], ["id", "comment", "name", "comment", "rows", "3", "placeholder", "Any comments please...", 1, "form-control"], [1, "btn", "revw-btn"], [1, "itemtitle"], [1, "itemdesc"], ["hidden", "", 1, "itemcateg"], [1, "itemprc"], [1, "itemprcval"], [1, "btn", "btn-outline-success", "itembtn", 3, "id"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "animateTransform", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Hello, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Table no.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Filter by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "select", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Veg");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Non-veg");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Sort by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Best-selling");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Price high-low");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Price low-high");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Alphabetical");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, MenuComponent_ng_container_51_Template, 17, 8, "ng-container", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Wraps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Chinease");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "Biryanis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "South Indian");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Pizza");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Expected time: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " minutes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Your cart is empty!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Add items to order.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Payment details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Sub Total: \u20B9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Tax: 5% GST");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Grand Total: \u20B9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Payout");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "Order items");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](101, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103, " Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, " Your Cart ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Choose payment option:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](113, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "from,");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, " Token no.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "p", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, " Table no.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](125);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "Payment details");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, "Sub Total: \u20B9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Tax: 5% GST");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Grand Total: \u20B9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "span", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "0.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "Payment mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](144, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Pay by Cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](149, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](151, "Pay Online");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](152, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "button", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "Proceed");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "Please Review:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](161, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "span", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](164, "input", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](165, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "input", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](168, "input", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](169, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](170, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](171, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](172, "input", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](173, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "textarea", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "button", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](176, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cust_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.custid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cust_tokenno);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cust_tabno);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cust_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cust_tokenno);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.cust_tabno);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".disabled[_ngcontent-%COMP%] {\r\n\tcursor: default\r\n}\r\n\r\n@font-face {\r\n\tfont-family:nunito;src:url('nunito.ttf')\r\n}\r\n\r\n@font-face {\r\n\tfont-family:cookie;src:url('cookie.ttf')\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tfont-family: nunito,'Segoe UI';\r\n\twidth: 100%;\r\n\tpadding: 0\r\n}\r\n\r\n.splash[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tdisplay: flex;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #ffe699;\r\n\tz-index: 3\r\n}\r\n\r\n.splash[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n\tmargin: auto;\r\n\tdisplay: block;\r\n\tshape-rendering: auto;\r\n\twidth: 30%;\r\n\tmargin-top: 70%\r\n}\r\n\r\n.container[_ngcontent-%COMP%] > .row[_ngcontent-%COMP%] {\r\n\theight: 50%;\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\tbackground: linear-gradient(to bottom,#ffe191,#ffc000 60%,#ffc000);\r\n\tmargin: 0\r\n}\r\n\r\n#top-logo[_ngcontent-%COMP%] {\r\n\tmax-width: 5rem;\r\n\tdisplay: block;\r\n\tposition: fixed;\r\n\ttop: 5px;\r\n\tright: 5px\r\n}\r\n\r\n.banner[_ngcontent-%COMP%] {\r\n\tpadding: 4%;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tz-index: 1\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 0\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]   .ln1[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]   .ln2[_ngcontent-%COMP%] {\r\n\tfont-size: 2rem;\r\n\tmargin-top: -5px\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]   .ln3[_ngcontent-%COMP%] {\r\n\tfont-size: .8rem;\r\n\tcolor: #404040;\r\n\tjustify-content: space-between;\r\n\tdisplay: flex;\r\n\tline-height: 2\r\n}\r\n\r\n.ln3[_ngcontent-%COMP%]   .tblno[_ngcontent-%COMP%] {\r\n\tpadding-right: 30%\r\n}\r\n\r\n.menulist[_ngcontent-%COMP%] {\r\n\tbackground: #f8f8f8;\r\n\tborder-top-left-radius: 50px;\r\n\tposition: fixed;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\ttop: 90px;\r\n\tpadding-top: 25px;\r\n}\r\n\r\n.menumain[_ngcontent-%COMP%] {\r\n\tmargin-left: 0;\r\n\topacity: 1\r\n}\r\n\r\ninput[type=text][_ngcontent-%COMP%]:not(.browser-default).srch-inp {\r\n\tfont-size: .8rem;\r\n\theight: 1.8rem;\r\n\tborder-radius: 5px;\r\n\twidth: 80%;\r\n\tmargin: 0 6%;\r\n\tposition: fixed;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #ced4da;\r\n\tpadding: 0 1rem\r\n}\r\n\r\n.menuopt[_ngcontent-%COMP%] {\r\n\tfont-size: 1rem;\r\n\tcolor: #495057;\r\n\tdisplay: flex;\r\n\tjustify-content: space-evenly;\r\n\talign-items: baseline;\r\n\tposition: fixed;\r\n\twidth: 94%;\r\n\tmargin: 8% 5%\r\n}\r\n\r\n.menuopt[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tfont-size: .7rem;\r\n\tcolor: #495057\r\n}\r\n\r\n.menuopt[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\r\n\tfont-size: .7rem;\r\n\theight: 1.5rem;\r\n\twidth: 94%;\r\n\tmargin: 10px 3% 10px 0;\r\n\tpadding: 0;\r\n\tpadding-left: 5px;\r\n\tbackground-color: unset;\r\n\tborder: unset;\r\n\tappearance: none;\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\tbackground-image: url('arr_dropdown.png');\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-position: 100%;\r\n\tbackground-size: 25px;\r\n\tborder: 1px solid #8888\r\n}\r\n\r\n#menufilter[_ngcontent-%COMP%] {\r\n\twidth: 25%\r\n}\r\n\r\n#menusort[_ngcontent-%COMP%] {\r\n\twidth: 32%\r\n}\r\n\r\n.menuopt[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\r\n\tbackground-color: unset;\r\n\tbox-shadow: unset\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 60px;\r\n\tbottom: 0;\r\n\tbackground: #fff;\r\n\tborder-top-left-radius: 30px;\r\n\tborder-top-right-radius: 30px;\r\n\tbox-shadow: 0 -5px 5px 0 #6666;\r\n\tmargin-bottom: 0\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tpadding: .6rem;\r\n\tcursor: pointer\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 20px;\r\n\tmargin-bottom: 5px\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem\r\n}\r\n\r\n#cartbtn[_ngcontent-%COMP%]   .inititem[_ngcontent-%COMP%]::after {\r\n\tcontent: '';\r\n\tbackground: red;\r\n\theight: 10px;\r\n\twidth: 10px;\r\n\tdisplay: block;\r\n\tmargin: -7% 6%;\r\n\tposition: fixed;\r\n\tborder-radius: 5px\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .col-6.active[_ngcontent-%COMP%]::after {\r\n\tcontent: '';\r\n\tbackground: #00b050;\r\n\theight: 2px;\r\n\twidth: 80%;\r\n\tdisplay: block;\r\n\tmargin: 0 10%\r\n}\r\n\r\n.menuitems[_ngcontent-%COMP%] {\r\n\toverflow-y: scroll;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tpadding: 0 5% 0 3%;\r\n\theight: calc(100vh - 280px);\r\n\ttop: 180px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n\tflex-direction: row;\r\n\tpadding: 8px 0 10px 0;\r\n\tborder-radius: 10px;\r\n\tmargin: 9px 0;\r\n\tbox-shadow: 0 1px 5px 0 #6666;\r\n\tmin-height: 90px\r\n}\r\n\r\n.menuitems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n\tmin-height: 90px\r\n}\r\n\r\n.itemtitle[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tfont-size: 1.5rem;\r\n\tmargin-bottom: 4px;\r\n\tline-height: 1.2;\r\n\tfont-family: cookie\r\n}\r\n\r\n.itemdesc[_ngcontent-%COMP%] {\r\n\tfont-size: .6rem;\r\n\tmargin: 0;\r\n\tline-height: 1.2;\r\n\tcolor: #7f7f7f\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tpadding: 0 10px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%]   .col-6[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n\tjustify-content: center\r\n}\r\n\r\n.itemprc[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem;\r\n\tfont-family: \"Segoe UI\"\r\n}\r\n\r\n.itembtn[_ngcontent-%COMP%] {\r\n\theight: 45%;\r\n\tline-height: 1\r\n}\r\n\r\nbutton.itembtn[_ngcontent-%COMP%]:focus {\r\n\tbackground-color: unset\r\n}\r\n\r\n.menucateg[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100px;\r\n\tdisplay: flex;\r\n\tflex-direction: row;\r\n\toverflow-x: scroll;\r\n\toverflow-y: hidden;\r\n\tbackground: #ffe699;\r\n\tbottom: 0;\r\n\tpadding: 3% 3% 19% 3%;\r\n\tbox-shadow: inset 0 5px 5px 0 #6666;\r\n\talign-items: center;\r\n}\r\n\r\n.cateitems[_ngcontent-%COMP%] {\r\n\tpadding: 0 5px;\r\n\tfont-size: 1rem;\r\n\tline-height: 1;\r\n\twhite-space: nowrap;\r\n\tmargin: 0 7px;\r\n\tcursor: pointer\r\n}\r\n\r\n.cateitems.active[_ngcontent-%COMP%] {\r\n\tdisplay: block;\r\n\tbackground: #00b050;\r\n\tpadding: 6px 10px;\r\n\tborder-radius: 7px;\r\n\tbox-shadow: 0 0 5px 1px #666;\r\n\tcolor: #fff\r\n}\r\n\r\n.cartmain[_ngcontent-%COMP%] {\r\n\tmargin-left: 100%;\r\n\topacity: 0\r\n}\r\n\r\n.cartitems[_ngcontent-%COMP%] {\r\n\toverflow-y: scroll;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: calc(100vh - 240px);\r\n\ttop: 125px;\r\n\tpadding: 0 5% 0 3%;\r\n\tmargin-top: 3px\r\n}\r\n\r\n.carttime[_ngcontent-%COMP%] {\r\n\tmargin: -4.5% 10%;\r\n\tposition: fixed;\r\n\tdisplay: none\r\n}\r\n\r\n.carttimeval[_ngcontent-%COMP%] {\r\n\tfont-weight: 700\r\n}\r\n\r\n.cartitems[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\r\n\tmin-height: 80px\r\n}\r\n\r\n.cartitems[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%] {\r\n\tflex-direction: column;\r\n\tpadding: 0 5px;\r\n\tjustify-content: space-evenly\r\n}\r\n\r\n.cartitems[_ngcontent-%COMP%]   .col-3.rmvcol[_ngcontent-%COMP%] {\r\n\tmargin: 10px 0;\r\n\tcursor: pointer\r\n}\r\n\r\n.cartitems[_ngcontent-%COMP%]   .col-3.rmvcol.disbl[_ngcontent-%COMP%] {\r\n\topacity: .3;\r\n\tcursor: default\r\n}\r\n\r\n.cartitem[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tfont-size: 1.5rem;\r\n\tmargin-bottom: 4px;\r\n\tline-height: 1.2;\r\n\tfont-family: cookie,\"Segoe UI\"\r\n}\r\n\r\n.cartprc[_ngcontent-%COMP%] {\r\n\tfont-size: .8rem\r\n}\r\n\r\n.itemtprc[_ngcontent-%COMP%] {\r\n\tfont-size: 1rem;\r\n\tfont-family: \"Segoe UI\"\r\n}\r\n\r\n.cartsts[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tfont-size: .8rem\r\n}\r\n\r\n.cartstsval[_ngcontent-%COMP%] {\r\n\tfont-weight: 500;\r\n\tfont-size: 1rem\r\n}\r\n\r\n.cartstsval.prep[_ngcontent-%COMP%] {\r\n\tcolor: #87cefa\r\n}\r\n\r\n.cartstsval.otw[_ngcontent-%COMP%] {\r\n\tcolor: orange\r\n}\r\n\r\n.cartstsval.serv[_ngcontent-%COMP%] {\r\n\tcolor: #90ee90\r\n}\r\n\r\n.cartstsval.cncl[_ngcontent-%COMP%] {\r\n\tcolor: #f08080\r\n}\r\n\r\n.qty-grp[_ngcontent-%COMP%] {\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n\tborder: 1px solid #00b050;\r\n\tborder-radius: 5px;\r\n\tfont-size: .8rem\r\n}\r\n\r\n.qtybtn[_ngcontent-%COMP%] {\r\n\tpadding: 0 5px;\r\n\tbackground: #00b05033;\r\n\tborder-radius: unset;\r\n\theight: 2rem;\r\n\tbox-shadow: unset\r\n}\r\n\r\n.qtyval[_ngcontent-%COMP%] {\r\n\tpadding: 0 2px\r\n}\r\n\r\n.cartrmv-btn[_ngcontent-%COMP%] {\r\n\twidth: 25px\r\n}\r\n\r\n.cartrmv-txt[_ngcontent-%COMP%] {\r\n\tfont-size: .8rem;\r\n\tmargin: 0\r\n}\r\n\r\n.cartpaym[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\tbottom: 0;\r\n\theight: 110px;\r\n\tpadding: 15px 3% 20% 3%;\r\n\ttext-align: center;\r\n\tflex-direction: row;\r\n\tbackground: #ffe699;\r\n\tbox-shadow: inset 0 5px 5px 0 #6666;\r\n\talign-items: center\r\n}\r\n\r\n.cartpaym-hd[_ngcontent-%COMP%] {\r\n\tfont-size: 1rem;\r\n\tline-height: 1;\r\n\tpadding: 0 5px;\r\n\tmargin: 0 7px\r\n}\r\n\r\n.cartpaym-dtl[_ngcontent-%COMP%] {\r\n\tfont-size: .8rem;\r\n\ttext-align: right;\r\n\tline-height: 1.2;\r\n\tpadding: 0 5px\r\n}\r\n\r\n.cartpaym-dtl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 3px\r\n}\r\n\r\n.cartpaym-gt[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem\r\n}\r\n\r\n.helpbtn[_ngcontent-%COMP%], .optbtn[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tposition: fixed;\r\n\ttop: 72px;\r\n\twidth: 32px;\r\n\theight: 32px;\r\n\talign-items: center;\r\n\tcursor: pointer;\r\n\tbackground: #c5e0b4;\r\n\tborder-radius: 5px;\r\n\tbox-shadow: 0 0 5px 1px #6666\r\n}\r\n\r\n.optbtn[_ngcontent-%COMP%] {\r\n\tright: 65px;\r\n\tpadding: 5px\r\n}\r\n\r\n.helpbtn[_ngcontent-%COMP%] {\r\n\tright: 15px;\r\n\tpadding: 6px\r\n}\r\n\r\n.optbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 22px\r\n}\r\n\r\n.helpbtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\twidth: 20px\r\n}\r\n\r\n.cartbtns[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\talign-items: center;\r\n\tjustify-content: space-around;\r\n\tmargin: .9rem auto .5rem auto\r\n}\r\n\r\n.emptycart[_ngcontent-%COMP%] {\r\n\ttext-align: center\r\n}\r\n\r\n.emptycartimg[_ngcontent-%COMP%] {\r\n\twidth: 40%;\r\n\tmargin: 10% 0\r\n}\r\n\r\n.emptycart[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem;\r\n\tmargin: 0\r\n}\r\n\r\n.payout[_ngcontent-%COMP%], .tocart[_ngcontent-%COMP%] {\r\n\twidth: 9rem;\r\n\tbox-shadow: 0 0 5px 2px #6668;\r\n\theight: 30px\r\n}\r\n\r\n.payout[_ngcontent-%COMP%] {\r\n\tbackground: #ffc00044;\r\n\tborder-color: #ffc000\r\n}\r\n\r\n.tocart[_ngcontent-%COMP%] {\r\n\tbackground-color: #00b050;\r\n\tborder-color: #00b050;\r\n\tcolor: #fff\r\n}\r\n\r\n.container[_ngcontent-%COMP%] > .row.paymain[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\tbackground: #ffe699;\r\n\tz-index: 2;\r\n\theight: 100%;\r\n\tpadding: 10% 5%;\r\n\tmin-height: 760px;\r\n}\r\n\r\n#paymain-logo[_ngcontent-%COMP%] {\r\n\twidth: 80%;\r\n\tmargin: 0 10%\r\n}\r\n\r\n.paymain[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 2px\r\n}\r\n\r\n.paym-fl[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem\r\n}\r\n\r\n.paym-fs[_ngcontent-%COMP%] {\r\n\tfont-size: .8rem\r\n}\r\n\r\n.paym-hd[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem;\r\n\tmargin: 10px 0 0 0\r\n}\r\n\r\n.paym-dtl[_ngcontent-%COMP%] {\r\n\ttext-align: right\r\n}\r\n\r\n.paym-gt[_ngcontent-%COMP%] {\r\n\tfont-size: 1.2rem\r\n}\r\n\r\n.paym-rdio[_ngcontent-%COMP%] {\r\n\tmargin: .5rem 2rem\r\n}\r\n\r\n.paym-btn[_ngcontent-%COMP%], .revw-btn[_ngcontent-%COMP%] {\r\n\tbackground: #00b050;\r\n\twidth: 50%;\r\n\tmargin-top: 10px;\r\n\tcolor: #fff;\r\n\tbox-shadow: 0 5px 15px -3px #00b050\r\n}\r\n\r\n.paym-btn[_ngcontent-%COMP%] {\r\n\tmargin-left: calc(25% - 25px)\r\n}\r\n\r\n.paym-back[_ngcontent-%COMP%] {\r\n\tmargin-top: 10px;\r\n\twidth: 25px\r\n}\r\n\r\n.paym-rdio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n\tcolor: #000\r\n}\r\n\r\n[type=radio].with-gap[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]::after, [type=radio].with-gap[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]::before {\r\n\tborder: 2px solid #00b050\r\n}\r\n\r\n[type=radio].with-gap[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]::after {\r\n\tbackground-color: #00b050\r\n}\r\n\r\n[type=radio].with-gap[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]::after, [type=radio].with-gap[_ngcontent-%COMP%]:checked + span[_ngcontent-%COMP%]::before {\r\n\tborder: 2px solid #00b050\r\n}\r\n\r\n.container[_ngcontent-%COMP%] > .row.revwmain[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\tposition: relative;\r\n\tbackground: #ffedb0;\r\n\tz-index: 2;\r\n\theight: 100%;\r\n\tpadding: 10% 5%;\r\n\tmin-height: 760px;\r\n}\r\n\r\n#revwmain-logo[_ngcontent-%COMP%] {\r\n\twidth: 80%;\r\n\tmargin: 0 10%\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%] {\r\n\tfont-size: 0;\r\n\twhite-space: nowrap;\r\n\tdisplay: inline-block;\r\n\twidth: 250px;\r\n\theight: 50px;\r\n\toverflow: hidden;\r\n\tposition: relative;\r\n\tbackground: url('star2.png');\r\n\tbackground-size: contain\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n\topacity: 0;\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\theight: 100%;\r\n\twidth: 20%;\r\n\tz-index: 1;\r\n\tbackground: url('star.png');\r\n\tbackground-size: contain\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n\t-moz-appearance: none;\r\n\t-webkit-appearance: none;\r\n\topacity: 0;\r\n\tdisplay: inline-block;\r\n\twidth: 20%;\r\n\theight: 100%;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tz-index: 2;\r\n\tposition: relative;\r\n\tpointer-events: unset\r\n}\r\n\r\n.revw-strs[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\tmargin: 20px 0;\r\n\tscale: .8\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked + i[_ngcontent-%COMP%], .star-rating[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover + i[_ngcontent-%COMP%] {\r\n\topacity: 1\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] {\r\n\twidth: 40%\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] {\r\n\twidth: 60%\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] {\r\n\twidth: 80%\r\n}\r\n\r\n.star-rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] ~ i[_ngcontent-%COMP%] {\r\n\twidth: 100%\r\n}\r\n\r\n#comment[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 20px\r\n}\r\n\r\n#comment[_ngcontent-%COMP%]:focus {\r\n\tborder-color: #ffc000;\r\n\tbox-shadow: unset\r\n}\r\n\r\n.revw-btn[_ngcontent-%COMP%] {\r\n\tmargin-left: 25%\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0IsQ0FBQztBQUNwQjs7QUFFQTtDQUNDLGtCQUFrQixDQUFDO0FBQ3BCOztBQUVBO0NBQ0MsOEJBQThCO0NBQzlCLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGFBQWE7Q0FDYixXQUFXO0NBQ1gsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QjtBQUNEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxrRUFBa0U7Q0FDbEU7QUFDRDs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsZUFBZTtDQUNmLFFBQVE7Q0FDUjtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixXQUFXO0NBQ1g7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLDhCQUE4QjtDQUM5QixhQUFhO0NBQ2I7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsNEJBQTRCO0NBQzVCLGVBQWU7Q0FDZixjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7Q0FDWixTQUFTO0NBQ1QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCO0FBQ0Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0IscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixVQUFVO0NBQ1Y7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLHdCQUF3QjtDQUN4Qix5Q0FBMkQ7Q0FDM0QsNEJBQTRCO0NBQzVCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLFdBQVc7Q0FDWCxZQUFZO0NBQ1osU0FBUztDQUNULGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsNkJBQTZCO0NBQzdCLDhCQUE4QjtDQUM5QjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZDtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixZQUFZO0NBQ1osV0FBVztDQUNYLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmO0FBQ0Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsbUJBQW1CO0NBQ25CLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsMkJBQTJCO0NBQzNCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYiw2QkFBNkI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCO0FBQ0Q7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGVBQWU7Q0FDZixXQUFXO0NBQ1gsYUFBYTtDQUNiLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsU0FBUztDQUNULHFCQUFxQjtDQUNyQixtQ0FBbUM7Q0FDbkMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixjQUFjO0NBQ2QsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYjtBQUNEOztBQUVBO0NBQ0MsY0FBYztDQUNkLG1CQUFtQjtDQUNuQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLDRCQUE0QjtDQUM1QjtBQUNEOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0IsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGVBQWU7Q0FDZjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Q7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0NBQ0MsU0FBUztDQUNULGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsZUFBZTtDQUNmO0FBQ0Q7O0FBRUE7Q0FDQyxTQUFTO0NBQ1Q7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIseUJBQXlCO0NBQ3pCLGtCQUFrQjtDQUNsQjtBQUNEOztBQUVBO0NBQ0MsY0FBYztDQUNkLHFCQUFxQjtDQUNyQixvQkFBb0I7Q0FDcEIsWUFBWTtDQUNaO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixXQUFXO0NBQ1gsU0FBUztDQUNULGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsbUNBQW1DO0NBQ25DO0FBQ0Q7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGNBQWM7Q0FDZDtBQUNEOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0NBQ0MsV0FBVztDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsNkJBQTZCO0NBQzdCO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0MsVUFBVTtDQUNWO0FBQ0Q7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCw2QkFBNkI7Q0FDN0I7QUFDRDs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQjtBQUNEOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLHFCQUFxQjtDQUNyQjtBQUNEOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFlBQVk7Q0FDWixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsVUFBVTtDQUNWO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakI7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWDtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQjtBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixZQUFZO0NBQ1osZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVjtBQUNEOztBQUVBO0NBQ0MsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsWUFBWTtDQUNaLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLDRCQUE4QztDQUM5QztBQUNEOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsTUFBTTtDQUNOLFlBQVk7Q0FDWixVQUFVO0NBQ1YsVUFBVTtDQUNWLDJCQUE2QztDQUM3QztBQUNEOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLHdCQUF3QjtDQUN4QixVQUFVO0NBQ1YscUJBQXFCO0NBQ3JCLFVBQVU7Q0FDVixZQUFZO0NBQ1osU0FBUztDQUNULFVBQVU7Q0FDVixVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCO0FBQ0Q7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQztBQUNEOztBQUVBO0NBQ0M7QUFDRDs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckI7QUFDRDs7QUFFQTtDQUNDO0FBQ0QiLCJmaWxlIjoibWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc2FibGVkIHtcclxuXHRjdXJzb3I6IGRlZmF1bHRcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6bnVuaXRvO3NyYzp1cmwoLi4vLi4vYXNzZXRzL2ZvbnQvbnVuaXRvLnR0ZilcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6Y29va2llO3NyYzp1cmwoLi4vLi4vYXNzZXRzL2ZvbnQvY29va2llLnR0ZilcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblx0Zm9udC1mYW1pbHk6IG51bml0bywnU2Vnb2UgVUknO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnNwbGFzaCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmU2OTk7XHJcblx0ei1pbmRleDogM1xyXG59XHJcblxyXG4uc3BsYXNoIHN2ZyB7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHNoYXBlLXJlbmRlcmluZzogYXV0bztcclxuXHR3aWR0aDogMzAlO1xyXG5cdG1hcmdpbi10b3A6IDcwJVxyXG59XHJcblxyXG4uY29udGFpbmVyPi5yb3cge1xyXG5cdGhlaWdodDogNTAlO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCNmZmUxOTEsI2ZmYzAwMCA2MCUsI2ZmYzAwMCk7XHJcblx0bWFyZ2luOiAwXHJcbn1cclxuXHJcbiN0b3AtbG9nbyB7XHJcblx0bWF4LXdpZHRoOiA1cmVtO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR0b3A6IDVweDtcclxuXHRyaWdodDogNXB4XHJcbn1cclxuXHJcbi5iYW5uZXIge1xyXG5cdHBhZGRpbmc6IDQlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHR6LWluZGV4OiAxXHJcbn1cclxuXHJcbi5iYW5uZXIgcCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMFxyXG59XHJcblxyXG4uYmFubmVyIC5sbjEge1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtXHJcbn1cclxuXHJcbi5iYW5uZXIgLmxuMiB7XHJcblx0Zm9udC1zaXplOiAycmVtO1xyXG5cdG1hcmdpbi10b3A6IC01cHhcclxufVxyXG5cclxuLmJhbm5lciAubG4zIHtcclxuXHRmb250LXNpemU6IC44cmVtO1xyXG5cdGNvbG9yOiAjNDA0MDQwO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyXHJcbn1cclxuXHJcbi5sbjMgLnRibG5vIHtcclxuXHRwYWRkaW5nLXJpZ2h0OiAzMCVcclxufVxyXG5cclxuLm1lbnVsaXN0IHtcclxuXHRiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG5cdGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR0b3A6IDkwcHg7XHJcblx0cGFkZGluZy10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5tZW51bWFpbiB7XHJcblx0bWFyZ2luLWxlZnQ6IDA7XHJcblx0b3BhY2l0eTogMVxyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5zcmNoLWlucCB7XHJcblx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRoZWlnaHQ6IDEuOHJlbTtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDAgNiU7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcclxuXHRwYWRkaW5nOiAwIDFyZW1cclxufVxyXG5cclxuLm1lbnVvcHQge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRjb2xvcjogIzQ5NTA1NztcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDk0JTtcclxuXHRtYXJnaW46IDglIDUlXHJcbn1cclxuXHJcbi5tZW51b3B0IGxhYmVsIHtcclxuXHRmb250LXNpemU6IC43cmVtO1xyXG5cdGNvbG9yOiAjNDk1MDU3XHJcbn1cclxuXHJcbi5tZW51b3B0IHNlbGVjdCB7XHJcblx0Zm9udC1zaXplOiAuN3JlbTtcclxuXHRoZWlnaHQ6IDEuNXJlbTtcclxuXHR3aWR0aDogOTQlO1xyXG5cdG1hcmdpbjogMTBweCAzJSAxMHB4IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRwYWRkaW5nLWxlZnQ6IDVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuXHRib3JkZXI6IHVuc2V0O1xyXG5cdGFwcGVhcmFuY2U6IG5vbmU7XHJcblx0LW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9hcnJfZHJvcGRvd24ucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XHJcblx0YmFja2dyb3VuZC1zaXplOiAyNXB4O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM4ODg4XHJcbn1cclxuXHJcbiNtZW51ZmlsdGVyIHtcclxuXHR3aWR0aDogMjUlXHJcbn1cclxuXHJcbiNtZW51c29ydCB7XHJcblx0d2lkdGg6IDMyJVxyXG59XHJcblxyXG4ubWVudW9wdCBzZWxlY3Q6Zm9jdXMge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNjBweDtcclxuXHRib3R0b206IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzMHB4O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgLTVweCA1cHggMCAjNjY2NjtcclxuXHRtYXJnaW4tYm90dG9tOiAwXHJcbn1cclxuXHJcbi5mb290ZXIgLmNvbC02IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cGFkZGluZzogLjZyZW07XHJcblx0Y3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5mb290ZXIgaW1nIHtcclxuXHR3aWR0aDogMjBweDtcclxuXHRtYXJnaW4tYm90dG9tOiA1cHhcclxufVxyXG5cclxuLmZvb3RlciBzcGFuIHtcclxuXHRmb250LXNpemU6IDEuMnJlbVxyXG59XHJcblxyXG4jY2FydGJ0biAuaW5pdGl0ZW06OmFmdGVyIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRiYWNrZ3JvdW5kOiByZWQ7XHJcblx0aGVpZ2h0OiAxMHB4O1xyXG5cdHdpZHRoOiAxMHB4O1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogLTclIDYlO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHhcclxufVxyXG5cclxuLmZvb3RlciAuY29sLTYuYWN0aXZlOjphZnRlciB7XHJcblx0Y29udGVudDogJyc7XHJcblx0YmFja2dyb3VuZDogIzAwYjA1MDtcclxuXHRoZWlnaHQ6IDJweDtcclxuXHR3aWR0aDogODAlO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdG1hcmdpbjogMCAxMCVcclxufVxyXG5cclxuLm1lbnVpdGVtcyB7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwYWRkaW5nOiAwIDUlIDAgMyU7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjgwcHgpO1xyXG5cdHRvcDogMTgwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdHBhZGRpbmc6IDhweCAwIDEwcHggMDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdG1hcmdpbjogOXB4IDA7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggNXB4IDAgIzY2NjY7XHJcblx0bWluLWhlaWdodDogOTBweFxyXG59XHJcblxyXG4ubWVudWl0ZW1zIC5jYXJkIHtcclxuXHRtaW4taGVpZ2h0OiA5MHB4XHJcbn1cclxuXHJcbi5pdGVtdGl0bGUge1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiA0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxuXHRmb250LWZhbWlseTogY29va2llXHJcbn1cclxuXHJcbi5pdGVtZGVzYyB7XHJcblx0Zm9udC1zaXplOiAuNnJlbTtcclxuXHRtYXJnaW46IDA7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxuXHRjb2xvcjogIzdmN2Y3ZlxyXG59XHJcblxyXG4uY2FyZCAuY29sLTMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRwYWRkaW5nOiAwIDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIC5jb2wtNiB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbn1cclxuXHJcbi5pdGVtcHJjIHtcclxuXHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRmb250LWZhbWlseTogXCJTZWdvZSBVSVwiXHJcbn1cclxuXHJcbi5pdGVtYnRuIHtcclxuXHRoZWlnaHQ6IDQ1JTtcclxuXHRsaW5lLWhlaWdodDogMVxyXG59XHJcblxyXG5idXR0b24uaXRlbWJ0bjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXRcclxufVxyXG5cclxuLm1lbnVjYXRlZyB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdG92ZXJmbG93LXg6IHNjcm9sbDtcclxuXHRvdmVyZmxvdy15OiBoaWRkZW47XHJcblx0YmFja2dyb3VuZDogI2ZmZTY5OTtcclxuXHRib3R0b206IDA7XHJcblx0cGFkZGluZzogMyUgMyUgMTklIDMlO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDAgNXB4IDVweCAwICM2NjY2O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXRlaXRlbXMge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRsaW5lLWhlaWdodDogMTtcclxuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdG1hcmdpbjogMCA3cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5jYXRlaXRlbXMuYWN0aXZlIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG5cdHBhZGRpbmc6IDZweCAxMHB4O1xyXG5cdGJvcmRlci1yYWRpdXM6IDdweDtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjNjY2O1xyXG5cdGNvbG9yOiAjZmZmXHJcbn1cclxuXHJcbi5jYXJ0bWFpbiB7XHJcblx0bWFyZ2luLWxlZnQ6IDEwMCU7XHJcblx0b3BhY2l0eTogMFxyXG59XHJcblxyXG4uY2FydGl0ZW1zIHtcclxuXHRvdmVyZmxvdy15OiBzY3JvbGw7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogY2FsYygxMDB2aCAtIDI0MHB4KTtcclxuXHR0b3A6IDEyNXB4O1xyXG5cdHBhZGRpbmc6IDAgNSUgMCAzJTtcclxuXHRtYXJnaW4tdG9wOiAzcHhcclxufVxyXG5cclxuLmNhcnR0aW1lIHtcclxuXHRtYXJnaW46IC00LjUlIDEwJTtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ZGlzcGxheTogbm9uZVxyXG59XHJcblxyXG4uY2FydHRpbWV2YWwge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDBcclxufVxyXG5cclxuLmNhcnRpdGVtcyAuY2FyZCB7XHJcblx0bWluLWhlaWdodDogODBweFxyXG59XHJcblxyXG4uY2FydGl0ZW1zIC5jb2wtMyB7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRwYWRkaW5nOiAwIDVweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seVxyXG59XHJcblxyXG4uY2FydGl0ZW1zIC5jb2wtMy5ybXZjb2wge1xyXG5cdG1hcmdpbjogMTBweCAwO1xyXG5cdGN1cnNvcjogcG9pbnRlclxyXG59XHJcblxyXG4uY2FydGl0ZW1zIC5jb2wtMy5ybXZjb2wuZGlzYmwge1xyXG5cdG9wYWNpdHk6IC4zO1xyXG5cdGN1cnNvcjogZGVmYXVsdFxyXG59XHJcblxyXG4uY2FydGl0ZW0ge1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LXNpemU6IDEuNXJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiA0cHg7XHJcblx0bGluZS1oZWlnaHQ6IDEuMjtcclxuXHRmb250LWZhbWlseTogY29va2llLFwiU2Vnb2UgVUlcIlxyXG59XHJcblxyXG4uY2FydHByYyB7XHJcblx0Zm9udC1zaXplOiAuOHJlbVxyXG59XHJcblxyXG4uaXRlbXRwcmMge1xyXG5cdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRmb250LWZhbWlseTogXCJTZWdvZSBVSVwiXHJcbn1cclxuXHJcbi5jYXJ0c3RzIHtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1zaXplOiAuOHJlbVxyXG59XHJcblxyXG4uY2FydHN0c3ZhbCB7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRmb250LXNpemU6IDFyZW1cclxufVxyXG5cclxuLmNhcnRzdHN2YWwucHJlcCB7XHJcblx0Y29sb3I6ICM4N2NlZmFcclxufVxyXG5cclxuLmNhcnRzdHN2YWwub3R3IHtcclxuXHRjb2xvcjogb3JhbmdlXHJcbn1cclxuXHJcbi5jYXJ0c3RzdmFsLnNlcnYge1xyXG5cdGNvbG9yOiAjOTBlZTkwXHJcbn1cclxuXHJcbi5jYXJ0c3RzdmFsLmNuY2wge1xyXG5cdGNvbG9yOiAjZjA4MDgwXHJcbn1cclxuXHJcbi5xdHktZ3JwIHtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjMDBiMDUwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRmb250LXNpemU6IC44cmVtXHJcbn1cclxuXHJcbi5xdHlidG4ge1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdGJhY2tncm91bmQ6ICMwMGIwNTAzMztcclxuXHRib3JkZXItcmFkaXVzOiB1bnNldDtcclxuXHRoZWlnaHQ6IDJyZW07XHJcblx0Ym94LXNoYWRvdzogdW5zZXRcclxufVxyXG5cclxuLnF0eXZhbCB7XHJcblx0cGFkZGluZzogMCAycHhcclxufVxyXG5cclxuLmNhcnRybXYtYnRuIHtcclxuXHR3aWR0aDogMjVweFxyXG59XHJcblxyXG4uY2FydHJtdi10eHQge1xyXG5cdGZvbnQtc2l6ZTogLjhyZW07XHJcblx0bWFyZ2luOiAwXHJcbn1cclxuXHJcbi5jYXJ0cGF5bSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGhlaWdodDogMTEwcHg7XHJcblx0cGFkZGluZzogMTVweCAzJSAyMCUgMyU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YmFja2dyb3VuZDogI2ZmZTY5OTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwIDVweCA1cHggMCAjNjY2NjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyXHJcbn1cclxuXHJcbi5jYXJ0cGF5bS1oZCB7XHJcblx0Zm9udC1zaXplOiAxcmVtO1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdHBhZGRpbmc6IDAgNXB4O1xyXG5cdG1hcmdpbjogMCA3cHhcclxufVxyXG5cclxuLmNhcnRwYXltLWR0bCB7XHJcblx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRsaW5lLWhlaWdodDogMS4yO1xyXG5cdHBhZGRpbmc6IDAgNXB4XHJcbn1cclxuXHJcbi5jYXJ0cGF5bS1kdGwgcCB7XHJcblx0bWFyZ2luLWJvdHRvbTogM3B4XHJcbn1cclxuXHJcbi5jYXJ0cGF5bS1ndCB7XHJcblx0Zm9udC1zaXplOiAxLjJyZW1cclxufVxyXG5cclxuLmhlbHBidG4sLm9wdGJ0biB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiA3MnB4O1xyXG5cdHdpZHRoOiAzMnB4O1xyXG5cdGhlaWdodDogMzJweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRiYWNrZ3JvdW5kOiAjYzVlMGI0O1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjNjY2NlxyXG59XHJcblxyXG4ub3B0YnRuIHtcclxuXHRyaWdodDogNjVweDtcclxuXHRwYWRkaW5nOiA1cHhcclxufVxyXG5cclxuLmhlbHBidG4ge1xyXG5cdHJpZ2h0OiAxNXB4O1xyXG5cdHBhZGRpbmc6IDZweFxyXG59XHJcblxyXG4ub3B0YnRuIGltZyB7XHJcblx0d2lkdGg6IDIycHhcclxufVxyXG5cclxuLmhlbHBidG4gaW1nIHtcclxuXHR3aWR0aDogMjBweFxyXG59XHJcblxyXG4uY2FydGJ0bnMge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuXHRtYXJnaW46IC45cmVtIGF1dG8gLjVyZW0gYXV0b1xyXG59XHJcblxyXG4uZW1wdHljYXJ0IHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLmVtcHR5Y2FydGltZyB7XHJcblx0d2lkdGg6IDQwJTtcclxuXHRtYXJnaW46IDEwJSAwXHJcbn1cclxuXHJcbi5lbXB0eWNhcnQgcCB7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0bWFyZ2luOiAwXHJcbn1cclxuXHJcbi5wYXlvdXQsLnRvY2FydCB7XHJcblx0d2lkdGg6IDlyZW07XHJcblx0Ym94LXNoYWRvdzogMCAwIDVweCAycHggIzY2Njg7XHJcblx0aGVpZ2h0OiAzMHB4XHJcbn1cclxuXHJcbi5wYXlvdXQge1xyXG5cdGJhY2tncm91bmQ6ICNmZmMwMDA0NDtcclxuXHRib3JkZXItY29sb3I6ICNmZmMwMDBcclxufVxyXG5cclxuLnRvY2FydCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwYjA1MDtcclxuXHRib3JkZXItY29sb3I6ICMwMGIwNTA7XHJcblx0Y29sb3I6ICNmZmZcclxufVxyXG5cclxuLmNvbnRhaW5lcj4ucm93LnBheW1haW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQ6ICNmZmU2OTk7XHJcblx0ei1pbmRleDogMjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogMTAlIDUlO1xyXG5cdG1pbi1oZWlnaHQ6IDc2MHB4O1xyXG59XHJcblxyXG4jcGF5bWFpbi1sb2dvIHtcclxuXHR3aWR0aDogODAlO1xyXG5cdG1hcmdpbjogMCAxMCVcclxufVxyXG5cclxuLnBheW1haW4gcCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMnB4XHJcbn1cclxuXHJcbi5wYXltLWZsIHtcclxuXHRmb250LXNpemU6IDEuMnJlbVxyXG59XHJcblxyXG4ucGF5bS1mcyB7XHJcblx0Zm9udC1zaXplOiAuOHJlbVxyXG59XHJcblxyXG4ucGF5bS1oZCB7XHJcblx0Zm9udC1zaXplOiAxLjJyZW07XHJcblx0bWFyZ2luOiAxMHB4IDAgMCAwXHJcbn1cclxuXHJcbi5wYXltLWR0bCB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG5cclxuLnBheW0tZ3Qge1xyXG5cdGZvbnQtc2l6ZTogMS4ycmVtXHJcbn1cclxuXHJcbi5wYXltLXJkaW8ge1xyXG5cdG1hcmdpbjogLjVyZW0gMnJlbVxyXG59XHJcblxyXG4ucGF5bS1idG4sLnJldnctYnRuIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG5cdHdpZHRoOiA1MCU7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRib3gtc2hhZG93OiAwIDVweCAxNXB4IC0zcHggIzAwYjA1MFxyXG59XHJcblxyXG4ucGF5bS1idG4ge1xyXG5cdG1hcmdpbi1sZWZ0OiBjYWxjKDI1JSAtIDI1cHgpXHJcbn1cclxuXHJcbi5wYXltLWJhY2sge1xyXG5cdG1hcmdpbi10b3A6IDEwcHg7XHJcblx0d2lkdGg6IDI1cHhcclxufVxyXG5cclxuLnBheW0tcmRpbyBsYWJlbCB7XHJcblx0Y29sb3I6ICMwMDBcclxufVxyXG5cclxuW3R5cGU9cmFkaW9dLndpdGgtZ2FwOmNoZWNrZWQrc3Bhbjo6YWZ0ZXIsW3R5cGU9cmFkaW9dLndpdGgtZ2FwOmNoZWNrZWQrc3Bhbjo6YmVmb3JlIHtcclxuXHRib3JkZXI6IDJweCBzb2xpZCAjMDBiMDUwXHJcbn1cclxuXHJcblt0eXBlPXJhZGlvXS53aXRoLWdhcDpjaGVja2VkK3NwYW46OmFmdGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwXHJcbn1cclxuXHJcblt0eXBlPXJhZGlvXS53aXRoLWdhcDpjaGVja2VkK3NwYW46OmFmdGVyLFt0eXBlPXJhZGlvXS53aXRoLWdhcDpjaGVja2VkK3NwYW46OmJlZm9yZSB7XHJcblx0Ym9yZGVyOiAycHggc29saWQgIzAwYjA1MFxyXG59XHJcblxyXG4uY29udGFpbmVyPi5yb3cucmV2d21haW4ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJhY2tncm91bmQ6ICNmZmVkYjA7XHJcblx0ei1pbmRleDogMjtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cGFkZGluZzogMTAlIDUlO1xyXG5cdG1pbi1oZWlnaHQ6IDc2MHB4O1xyXG59XHJcblxyXG4jcmV2d21haW4tbG9nbyB7XHJcblx0d2lkdGg6IDgwJTtcclxuXHRtYXJnaW46IDAgMTAlXHJcbn1cclxuXHJcbi5zdGFyLXJhdGluZyB7XHJcblx0Zm9udC1zaXplOiAwO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDUwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc3RhcjIucG5nKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW5cclxufVxyXG5cclxuLnN0YXItcmF0aW5nIGkge1xyXG5cdG9wYWNpdHk6IDA7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMjAlO1xyXG5cdHotaW5kZXg6IDE7XHJcblx0YmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvc3Rhci5wbmcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY29udGFpblxyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcgaW5wdXQge1xyXG5cdC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblx0b3BhY2l0eTogMDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0d2lkdGg6IDIwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0ei1pbmRleDogMjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0cG9pbnRlci1ldmVudHM6IHVuc2V0XHJcbn1cclxuXHJcbi5yZXZ3LXN0cnMge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW46IDIwcHggMDtcclxuXHRzY2FsZTogLjhcclxufVxyXG5cclxuLnN0YXItcmF0aW5nIGlucHV0OmNoZWNrZWQraSwuc3Rhci1yYXRpbmcgaW5wdXQ6aG92ZXIraSB7XHJcblx0b3BhY2l0eTogMVxyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcgaX5pIHtcclxuXHR3aWR0aDogNDAlXHJcbn1cclxuXHJcbi5zdGFyLXJhdGluZyBpfml+aSB7XHJcblx0d2lkdGg6IDYwJVxyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcgaX5pfml+aSB7XHJcblx0d2lkdGg6IDgwJVxyXG59XHJcblxyXG4uc3Rhci1yYXRpbmcgaX5pfml+aX5pIHtcclxuXHR3aWR0aDogMTAwJVxyXG59XHJcblxyXG4jY29tbWVudCB7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG4jY29tbWVudDpmb2N1cyB7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZmZjMDAwO1xyXG5cdGJveC1zaGFkb3c6IHVuc2V0XHJcbn1cclxuXHJcbi5yZXZ3LWJ0biB7XHJcblx0bWFyZ2luLWxlZnQ6IDI1JVxyXG59Il19 */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items.service */ "15T6");
/* harmony import */ var _customers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customers.service */ "niAj");
/* harmony import */ var _tokens_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tokens.service */ "xloE");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../orders.service */ "frVr");
/* harmony import */ var _transactions_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transactions.service */ "0RKa");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ "m0r1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















function AdminComponent_tr_261_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.order_token, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.customer_id, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.created_at, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.order_status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.discount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.tax, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.subtotal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.grandtotal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.order_item.length, " items ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.feedback, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", order_r3.comment, " ");
} }
function AdminComponent_tr_285_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cust_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.mobileno, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.token, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.arrival_time, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.order_type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cust_r4.transaction_id, " ");
} }
function AdminComponent_tr_591_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "td", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "img", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "span", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", i_r6 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.unit_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", item_r5.available, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("id", item_r5._id);
} }
class AdminComponent {
    constructor(itemsService, customersService, tokenService, orderService, transactionsService, activRoute) {
        this.itemsService = itemsService;
        this.customersService = customersService;
        this.tokenService = tokenService;
        this.orderService = orderService;
        this.transactionsService = transactionsService;
        this.activRoute = activRoute;
    }
    addItem() {
        const item = {
            title: this.title,
            description: this.description,
            unit_price: Number(this.unit_price),
            category: this.category,
            available: true
        };
        // console.log(item);
        this.itemsService.addItem(item)
            .subscribe((item) => {
            this.items.push(item);
            console.log('item added');
        });
        // window.location.reload();
    }
    ngOnInit() {
        this.activRoute.queryParams.subscribe(params => {
            var atkn = window.localStorage.getItem('admintkn');
            if (atkn == null)
                window.location.href = '/signin';
            else {
                if (atkn != params.p)
                    window.location.href = '/signin';
                else {
                    $(window).on('load', function () {
                        setTimeout(function () {
                            $('.splash').fadeOut();
                        }, 500);
                    });
                }
            }
        });
        this.customersService.getCustomers()
            .subscribe((custs) => {
            this.custs = custs;
            // console.log(custs);
        });
        this.itemsService.getMenu()
            .subscribe((items) => {
            items.sort((a, b) => a.category.localeCompare(b.category));
            this.items = items;
            setTimeout(() => {
                this.items.forEach(item => {
                    $(document).on('click', '#' + item._id, function () {
                        let tr = $(this).parent().parent();
                        var desc, prc;
                        if (tr.hasClass('edit-0')) {
                            tr.toggleClass('edit-1 edit-0');
                            desc = tr.find('td:nth-child(3)').text();
                            tr.find('td:nth-child(3)')
                                .html('<textarea class="form-control" rows="2">' + desc + '</textarea>');
                            prc = tr.find('td:nth-child(4)').text();
                            tr.find('td:nth-child(4)')
                                .html('<input type="text" class="form-control" value="' + prc + '">');
                            $(this).find('span').text(" confirm?");
                            return;
                        }
                        else {
                            tr.toggleClass('edit-1 edit-0');
                            desc = tr.find('td:nth-child(3)').find('textarea').val();
                            prc = tr.find('td:nth-child(4)').find('input').val();
                            let udtitem = {
                                id: String(item._id),
                                description: desc,
                                unit_price: prc
                            };
                            updateitem(udtitem);
                            tr.find('td:nth-child(3)').html(String(desc));
                            tr.find('td:nth-child(4)').html(String(prc));
                            $(this).find('span').text("");
                        }
                    });
                });
            }, 1000);
            // console.log(items);
        });
        const updateitem = ((udtitem) => {
            // console.log(udtitem);
            this.itemsService.updateitem(udtitem)
                .subscribe((res) => {
                // alert("item updated!");
            });
        });
        this.tokenService.getTokens()
            .subscribe((tokens) => {
            this.tokens = tokens;
            // console.log(tokens);
        });
        this.orderService.getallOrders()
            .subscribe((orders) => {
            this.orders = orders;
            // console.log(orders);
        });
        this.transactionsService.getTrans()
            .subscribe((trans) => {
            this.trans = trans;
            // console.log(orders);
        });
        $(document).on('click', '#adminlogout', function () {
            window.localStorage.removeItem('admintkn');
            alert('Successfully Logged out!');
            window.location.href = '/signin';
        });
        $('.tabpane.active').fadeIn();
        $(document).on('click', '.navitems a', function () {
            var _a, _b;
            $('.navitems.active').toggleClass('active');
            $(this).parent().toggleClass('active');
            let tabid = String((_a = $(this).attr('id')) === null || _a === void 0 ? void 0 : _a.substr(Number((_b = $(this).attr('id')) === null || _b === void 0 ? void 0 : _b.indexOf('-')) + 1));
            $('.tabpane.active').fadeOut(300, function () {
                $('#' + tabid).fadeIn(300);
                $(this).toggleClass('active');
                $('#' + tabid).toggleClass('active');
            });
        });
        chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"].register(chart_js__WEBPACK_IMPORTED_MODULE_5__["ArcElement"], chart_js__WEBPACK_IMPORTED_MODULE_5__["LineElement"], chart_js__WEBPACK_IMPORTED_MODULE_5__["BarElement"], chart_js__WEBPACK_IMPORTED_MODULE_5__["PointElement"], chart_js__WEBPACK_IMPORTED_MODULE_5__["BarController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["BubbleController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["DoughnutController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["LineController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["PieController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["PolarAreaController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["RadarController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["ScatterController"], chart_js__WEBPACK_IMPORTED_MODULE_5__["CategoryScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["LinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["LogarithmicScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["RadialLinearScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["TimeScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["TimeSeriesScale"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Filler"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Legend"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Title"], chart_js__WEBPACK_IMPORTED_MODULE_5__["Tooltip"]);
        let weekchartid = $('#orderperday');
        var weekchart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](weekchartid, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                        label: 'prev. week',
                        data: [16, 18, 21, 19, 25, 26, 29],
                        fill: false,
                        borderColor: '#ef476f',
                        tension: 0.1
                    }]
            },
            options: {
                scales: {
                    y: {
                        max: 30,
                        min: 15,
                        ticks: {
                            stepSize: 3
                        }
                    }
                }
            }
        });
        let categchartid = $('#orderpercateg');
        var categchart = new chart_js__WEBPACK_IMPORTED_MODULE_5__["Chart"](categchartid, {
            type: 'polarArea',
            data: {
                labels: ['Wraps', 'Biryanis & Rice', 'Chinese', 'Pizzas', 'South Indian'],
                datasets: [{
                        label: 'for last 5 days',
                        data: [56, 52, 74, 59, 72],
                        backgroundColor: ['#fb5607', '#4ecdc4', '#00B050', '#ff6b6b', '#ffe66d']
                    }]
            },
            options: {
                elements: {
                    line: {
                        borderWidth: 3
                    }
                }
            },
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_items_service__WEBPACK_IMPORTED_MODULE_0__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_tokens_service__WEBPACK_IMPORTED_MODULE_2__["TokensService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([
            _items_service__WEBPACK_IMPORTED_MODULE_0__["ItemsService"],
            _customers_service__WEBPACK_IMPORTED_MODULE_1__["CustomersService"],
            _tokens_service__WEBPACK_IMPORTED_MODULE_2__["TokensService"],
            _orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"],
            _transactions_service__WEBPACK_IMPORTED_MODULE_4__["TransactionsService"]
        ])], decls: 592, vars: 8, consts: [[1, "container"], [1, "splash", 2, "display", "block"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["d", "M20 50A30 30 0 0 0 80 50A30 32 0 0 1 20 50", "fill", "#000000", "stroke", "none"], ["attributeName", "transform", "type", "rotate", "dur", "1s", "repeatCount", "indefinite", "keyTimes", "0;1", "values", "0 50 51;360 50 51"], [1, "row"], [1, "col-lg-2", "nav-panel"], ["src", "../../assets/images/beanery name.png", "alt", "", 1, "navlogo"], [1, "navitems", "active"], ["src", "../../assets/images/analy.png", "alt", "", 1, "navicon"], ["id", "l-analytics"], [1, "navitems"], ["src", "../../assets/images/feedback.png", "alt", "", 1, "navicon"], ["id", "l-feedback"], ["src", "../../assets/images/orders.png", "alt", "", 1, "navicon"], ["id", "l-orders"], ["src", "../../assets/images/cust.png", "alt", "", 1, "navicon"], ["id", "l-customers"], ["src", "../../assets/images/trans.png", "alt", "", 1, "navicon"], ["id", "l-trans"], ["src", "../../assets/images/token.png", "alt", "", 1, "navicon"], ["id", "l-tokens"], ["src", "../../assets/images/items.png", "alt", "", 1, "navicon"], ["id", "l-items"], ["src", "../../assets/images/logout.png", "alt", "", 1, "navicon"], ["id", "adminlogout"], ["id", "main-content", 1, "col-lg-10"], ["id", "analytics", 1, "tabpane", "active"], [1, "row", "banrrow"], [1, "col-lg-2", "banrcards", "sale"], [1, "banrdata"], ["src", "../../assets/images/profits.png", "alt", "", 1, "banrimg"], [1, "col-lg-1"], [1, "col-lg-2", "banrcards", "order"], ["src", "../../assets/images/supplies.png", "alt", "", 1, "banrimg"], [1, "col-lg-2", "banrcards", "cust"], ["src", "../../assets/images/customer.png", "alt", "", 1, "banrimg"], [1, "col-lg-5"], [1, "tblbg"], [1, "table"], [1, "col-lg-6"], ["id", "orderperday"], ["id", "orderpercateg", "width", "420px", "height", "300px"], ["id", "feedback", 1, "tabpane"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["data-toggle", "tab", "href", "#com-all", 1, "nav-link", "active"], ["data-toggle", "tab", "href", "#com-5star", 1, "nav-link"], ["data-toggle", "tab", "href", "#com-4star", 1, "nav-link"], ["data-toggle", "tab", "href", "#com-3star", 1, "nav-link"], ["data-toggle", "tab", "href", "#com-2star", 1, "nav-link"], ["data-toggle", "tab", "href", "#com-1star", 1, "nav-link"], [1, "tab-content", "review"], ["id", "com-all", 1, "tab-pane", "fade", "show", "active"], [1, "comcard"], [1, "comcust"], [1, "comstrrow"], ["src", "assets/images/star.png", "alt", "", 1, "str"], [1, "comtext"], ["id", "com-5star", 1, "tab-pane", "fade"], ["id", "com-4star", 1, "tab-pane", "fade"], ["id", "com-3star", 1, "tab-pane", "fade"], ["id", "com-2star", 1, "tab-pane", "fade"], ["id", "com-1star", 1, "tab-pane", "fade"], ["id", "orders", 1, "tabpane"], [4, "ngFor", "ngForOf"], ["id", "customers", 1, "tabpane"], ["id", "trans", 1, "tabpane"], ["id", "tokens", 1, "tabpane"], ["id", "items", 1, "tabpane"], ["id", "itemform", 1, "col", "s12", 3, "submit"], [1, "input-field", "col", "s6"], ["type", "text", "id", "itemtitle", "name", "itemtitle", 3, "ngModel", "ngModelChange"], ["for", "itemtitle"], [1, "input-field", "col", "s12"], ["id", "itemdesc", "name", "itemdesc", "rows", "2", 1, "materialize-textarea", 3, "ngModel", "ngModelChange"], ["for", "itemdesc"], [1, "input-field", "col", "s4"], ["type", "number", "id", "itemprice", "name", "itemprice", 3, "ngModel", "ngModelChange"], ["for", "itemprice"], ["type", "text", "id", "itemcate", "name", "itemcate", 3, "ngModel", "ngModelChange"], ["for", "itemcate"], ["type", "text", "id", "itemavail", "name", "itemavail", 3, "ngModel", "ngModelChange"], ["for", "itemavail"], ["type", "submit", 1, "btn", "btn-primary"], ["class", "edit-0", 4, "ngFor", "ngForOf"], [1, "edit-0"], [1, "td-center"], [3, "id"], ["src", "../../assets/images/edit.png", 1, "edit-btn"], [1, "conf"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "animateTransform", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Database");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Total Sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "\u20B9 2563");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "19");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](75, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "Best selling dishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Top Dishes");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Avg. order per day");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, " Paneer Roll ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, " 12 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, " Manchurian ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, " 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, " Veggie Pizza ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " 8 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, " Cheese Masala Dosa ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, " 7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113, " Veg Biryani ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, " 6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](116, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Orders per day");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](120, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](122, "canvas", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](123, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](124, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](127, "Orders from each category (prev. week)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](128, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](129, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](130, "canvas", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](135, " Filter by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "ul", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](138, "a", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](139, "All Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142, "5-star Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](143, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](145, "4-star Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](147, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](148, "3-star Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](150, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "2-star Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "li", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "1-star Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](155, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](158, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](160, "Aditya Sisodiya wrote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](163, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](164, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](165, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](166, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](168, "Amazing taste");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](171, "Rahul Jain wrote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](173, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](174, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](175, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](176, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](178, "Great taste and wholesome food!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](179, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](181, "Moin wrote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](183, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](184, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](185, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](186, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](187, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](189, "Greate portion size. Always treat on this restaurant. Also having very nice ambience and they have maintained it for such a long time. Good.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](192, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](193, "Aditya Sisodiya wrote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](194, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](195, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](196, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](197, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](198, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](199, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "Amazing taste");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204, "Moin wrote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](206, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](207, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](208, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](209, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](210, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](212, "Greate portion size. Always treat on this restaurant. Also having very nice ambience and they have maintained it for such a long time. Good.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](213, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](215, "p", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](216, "Rahul Jain wrote: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](218, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](219, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](220, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](221, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "p", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](223, "Great taste and wholesome food!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](224, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](225, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](226, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](227, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](228, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](229, "...");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](230, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](231, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](232, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](233, "List of orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](234, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](235, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](236, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](237, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](238, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](239, "Order token");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](240, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](241, "Customer id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](242, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](243, "Created at");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](244, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](245, "Order status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](246, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](247, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](248, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](249, "Tax");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](250, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](251, "Sub total");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](252, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](253, "Grand total");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](254, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](255, "Order item");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](256, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](257, "Feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](258, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](259, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](260, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](261, AdminComponent_tr_261_Template, 23, 11, "tr", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](262, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](263, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](264, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](265, "List of Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](266, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](267, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](268, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](269, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](270, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](271, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](272, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](273, "Mobile no");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](274, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](275, "Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](276, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](277, "arrival time");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](278, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](279, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](280, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](281, "Order type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](282, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](283, "Transaction id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](284, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](285, AdminComponent_tr_285_Template, 15, 7, "tr", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](286, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](287, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](288, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](289, "List of transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](290, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](291, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](292, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](293, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](294, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](295, "Customer id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](296, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](297, "Order token");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](298, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](299, "Payment mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](300, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](301, "Amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](302, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](303, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](304, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](305, " 6061d3ddd2d49c077c6eb8c6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](306, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](307, " 040521-001 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](308, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](309, " online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](310, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](311, " 145.6 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](312, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](313, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](314, "60706a83dff342fffe8fc164");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](315, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](316, "040521-004");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](317, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](318, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](319, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](320, "174.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](321, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](323, "60706a43e589d8ac1d7fec69");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](324, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](325, "040521-005");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](326, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](327, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](329, "198.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](330, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](331, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](332, "60706a64d36d5f5f68dde697");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](334, "050521-015");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](336, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](337, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](338, "105.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](339, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](340, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](341, "60706a2515b397c1cb79367a");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](342, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](343, "050521-001");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](344, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](345, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](346, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](347, "297.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](348, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](350, "60706a72218cdaf9b3eb91f5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](351, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](352, "050521-002");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](353, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](354, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](355, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](356, "148.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](357, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](358, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](359, "60706a19f6c75a417f3f96f8");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](361, "050521-003");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](363, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](365, "134.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](366, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](367, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](368, "60706a36de4697b6c791de97");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](369, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](370, "050521-006");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](371, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](372, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](373, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](374, "292.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](375, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](376, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](377, "60706a851b4de8dce4d81e4f");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](378, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](379, "050521-007");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](380, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](381, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](382, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](383, "260.3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](384, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](385, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](386, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](387, "60706a4ad7b535e942ede153");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](388, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](389, "050521-008");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](390, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](391, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](392, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](393, "154.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](394, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](395, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](396, "60706a95c32589b764747f97");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](397, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](398, "050521-009");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](399, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](400, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](401, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](402, "258.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](403, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](404, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](405, "60706a8f4d3fc3db38214d13");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](406, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](407, "050521-010");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](408, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](409, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](410, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](411, "271.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](412, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](413, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](414, "60706af26e2fa94e848a7969");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](415, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](416, "050521-011");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](417, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](418, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](419, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](420, "137.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](421, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](422, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](423, "60706ac182be4ab927e5b555");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](424, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](425, "050521-012");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](426, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](427, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](428, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](429, "266.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](430, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](431, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](432, "60706a8b2776dd28a5344fb5");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](433, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](434, "050521-013");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](435, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](436, "cash");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](437, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](438, "235.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](439, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](440, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](441, "60706a41151e9d72d35fcf31");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](442, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](443, "050521-014");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](444, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](445, "online");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](446, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](447, "187.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](448, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](449, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](450, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](451, "List of tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](452, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](453, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](454, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](455, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](456, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](457, "Token date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](458, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](459, "Count");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](460, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](461, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](463, " 050521 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](464, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](465, " 19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](466, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](467, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](468, " 040521 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](469, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](470, " 15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](471, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](472, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](473, " 030521 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](475, " 16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](476, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](478, " 020521 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](479, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](480, " 22 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](481, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](482, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](483, " 010521 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](484, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](485, " 20 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](486, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](487, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](488, " 300421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](489, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](490, " 19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](491, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](492, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](493, " 290421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](494, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](495, " 16 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](496, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](497, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](498, " 280421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](499, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](500, " 14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](501, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](502, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](503, " 270421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](504, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](505, " 15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](506, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](507, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](508, " 260421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](509, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](510, " 17 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](511, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](512, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](513, " 250421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](514, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](515, " 21 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](516, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](517, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](518, " 240421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](519, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](520, " 19 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](521, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](522, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](523, " 230421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](524, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](525, " 17 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](526, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](527, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](528, " 220421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](529, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](530, " 14 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](531, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](532, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](533, " 210421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](534, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](535, " 18 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](536, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](537, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](538, " 200421 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](539, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](540, " 15 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](541, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](542, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](543, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](544, "Add new items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](545, "form", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("submit", function AdminComponent_Template_form_submit_545_listener() { return ctx.addItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](546, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](547, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](548, "input", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_548_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](549, "label", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](550, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](551, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](552, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](553, "textarea", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_textarea_ngModelChange_553_listener($event) { return ctx.description = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](554, "label", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](555, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](556, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](557, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](558, "input", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_558_listener($event) { return ctx.unit_price = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](559, "label", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](560, "Price:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](561, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](562, "input", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_562_listener($event) { return ctx.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](563, "label", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](564, "Category:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](565, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](566, "input", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_566_listener($event) { return ctx.available = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](567, "label", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](568, "Availabality:");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](569, "button", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](570, "Add item to menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](571, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](572, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](573, "List of items");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](574, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](575, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](576, "table", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](577, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](578, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](579, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](580, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](581, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](582, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](583, "Desciption");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](584, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](585, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](586, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](587, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](588, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](589, "Availabality");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](590, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](591, AdminComponent_tr_591_Template, 17, 7, "tr", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](261);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.custs);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](263);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.unit_price);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.available);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"]], styles: [".td-center[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n}\r\n\r\n.edit-btn[_ngcontent-%COMP%] {\r\n\tmax-width: 25px;\r\n\tcursor: pointer;\r\n}\r\n\r\n.conf[_ngcontent-%COMP%] {\r\n\tcursor: pointer;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: nunito;\r\n\tsrc: url('nunito.ttf');\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tmax-width: unset;\r\n\tfont-family: nunito, 'Segoe UI';\r\n\twidth: 100%;\r\n}\r\n\r\n.splash[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tdisplay: block;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #FFE699;\r\n\tz-index: 3;\r\n}\r\n\r\n.splash[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n\tmargin: auto;\r\n\tdisplay: block;\r\n\tshape-rendering: auto;\r\n\twidth: 10%;\r\n\tmargin-top: 18%;\r\n}\r\n\r\n.nav-panel[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\theight: 100%;\r\n\tbackground-color: #C5E0B4;\r\n\tborder-top-right-radius: 20px;\r\n\tborder-bottom-right-radius: 20px;\r\n\tpadding: 1% 0;\r\n\ttext-align: center;\r\n}\r\n\r\n.navlogo[_ngcontent-%COMP%] {\r\n\twidth: 200px;\r\n}\r\n\r\n.navitems[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tjustify-content: start;\r\n\tpadding: 10px 1.5rem;\r\n\topacity: 0.8;\r\n\tmargin: 0 20px;\r\n}\r\n\r\n.navitems[_ngcontent-%COMP%]:hover {\r\n\topacity: 1;\r\n}\r\n\r\n.navitems.active[_ngcontent-%COMP%] {\r\n\tbackground: #00B050;\r\n\tbox-shadow: inset 0px 0px 5px 2px #666;\r\n\tborder-radius: 10px;\r\n\tcolor: #fff;\r\n\topacity: 1;\r\n\tcursor: unset;\r\n}\r\n\r\n.navicon[_ngcontent-%COMP%] {\r\n\twidth: 25px;\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.navitems[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: unset;\r\n\tcursor: pointer;\r\n}\r\n\r\n.navitems[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n\tcolor: unset;\r\n\ttext-decoration: none;\r\n}\r\n\r\n#main-content[_ngcontent-%COMP%] {\r\n\tmargin-left: 16.666667%;\r\n}\r\n\r\n.tabpane[_ngcontent-%COMP%] {\r\n\tdisplay: none;\r\n\tpadding: 3% 2%;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n\tword-break: break-all;\r\n}\r\n\r\n.table[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n}\r\n\r\n.tblbg[_ngcontent-%COMP%] {\r\n\tpadding: 15px;\r\n\tbackground: #ffe69944;\r\n\tborder-radius: 15px;\r\n\tbox-shadow: 0px 0px 15px 0px #6666;\r\n}\r\n\r\n#items[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n\tword-break: keep-all;\r\n}\r\n\r\n#itemform[_ngcontent-%COMP%] {\r\n\tmargin: 2rem auto 3rem auto;\r\n\twidth: 70%;\r\n}\r\n\r\n#itemform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n\theight: 3rem;\r\n\tbackground-color: #00B050;\r\n\tborder-color: #00B050;\r\n}\r\n\r\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n\tfloat: unset;\r\n}\r\n\r\n.table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{\r\n\tborder-bottom-color: #FFC000;\r\n\tborder-top-color: #FFC000;\r\n\tvertical-align: middle;\r\n}\r\n\r\n#feedback[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\r\n\tbackground: #f8f8f8;\r\n\tborder-color: #f8f8f8 #f8f8f8 #ef476f;\r\n\tborder-bottom-width: 2px;\r\n}\r\n\r\n.nav-tabs[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\t\r\n\tborder-color: #f8f8f8 #f8f8f8 #808080;\r\n\tborder-bottom-width: 2px;\r\n}\r\n\r\n.review[_ngcontent-%COMP%] {\r\n\tmargin: 2% 20%;\r\n}\r\n\r\n.comcard[_ngcontent-%COMP%] {\r\n\tpadding: 1rem;\r\n\tbackground: #ffe69944;\r\n\tborder-radius: 20px;\r\n\tbox-shadow: 0px 0px 5px 2px #6666;\r\n\tmargin: 1rem auto;\r\n}\r\n\r\n.comcust[_ngcontent-%COMP%] {\r\n\tfont-size: 0.9rem;\r\n}\r\n\r\n.comstrrow[_ngcontent-%COMP%], .comtext[_ngcontent-%COMP%] {\r\n\tmargin-left: 20px;\r\n\tmargin-bottom: 0;\r\n}\r\n\r\n.comstrrow[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.str[_ngcontent-%COMP%] {\r\n\twidth: 20px;\r\n}\r\n\r\n.banrrow[_ngcontent-%COMP%] {\r\n\tpadding-left: 15px;\r\n}\r\n\r\n.banrcards[_ngcontent-%COMP%] {\r\n\tdisplay: flex;\r\n\tpadding: 1rem 1.2rem;\r\n\tborder-radius: 10px;\r\n\tbox-shadow: 0px 0px 7px 1px #6666;\r\n\talign-items: center;\r\n\tjustify-content: space-between;\r\n}\r\n\r\n.banrcards.sale[_ngcontent-%COMP%] {\r\n\tbackground-color: #fde2e4;\r\n}\r\n\r\n.banrcards.order[_ngcontent-%COMP%] {\r\n\tbackground-color: #bee1e6;\r\n}\r\n\r\n.banrcards.cust[_ngcontent-%COMP%] {\r\n\tbackground-color: #dbcdf0;\r\n}\r\n\r\n.banrcards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n.banrdata[_ngcontent-%COMP%] {\r\n\tfont-size: 1.4rem;\r\n\ttext-shadow: 0px 0px 2px #0006;\r\n}\r\n\r\n.banrimg[_ngcontent-%COMP%] {\r\n\tmax-width: 3.5rem;\r\n\tmargin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsc0JBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsVUFBVTtDQUNWLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsK0JBQStCO0NBQy9CLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsVUFBVTtBQUNYOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsVUFBVTtDQUNWLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLHlCQUF5QjtDQUN6Qiw2QkFBNkI7Q0FDN0IsZ0NBQWdDO0NBQ2hDLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixZQUFZO0NBQ1osY0FBYztBQUNmOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHNDQUFzQztDQUN0QyxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFVBQVU7Q0FDVixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLDJCQUEyQjtDQUMzQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1Qix5QkFBeUI7Q0FDekIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyxxQ0FBcUM7Q0FDckMsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsaUNBQWlDO0NBQ2pDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isb0JBQW9CO0NBQ3BCLG1CQUFtQjtDQUNuQixpQ0FBaUM7Q0FDakMsbUJBQW1CO0NBQ25CLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6ImFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGQtY2VudGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWJ0biB7XHJcblx0bWF4LXdpZHRoOiAyNXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmNvbmYge1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IG51bml0bztcclxuXHRzcmM6IHVybCgnLi4vLi4vYXNzZXRzL2ZvbnQvbnVuaXRvLnR0ZicpO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRtYXgtd2lkdGg6IHVuc2V0O1xyXG5cdGZvbnQtZmFtaWx5OiBudW5pdG8sICdTZWdvZSBVSSc7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zcGxhc2gge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRTY5OTtcclxuXHR6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uc3BsYXNoIHN2ZyB7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHNoYXBlLXJlbmRlcmluZzogYXV0bztcclxuXHR3aWR0aDogMTAlO1xyXG5cdG1hcmdpbi10b3A6IDE4JTtcclxufVxyXG5cclxuLm5hdi1wYW5lbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQzVFMEI0O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDElIDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2bG9nbyB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubmF2aXRlbXMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuXHRwYWRkaW5nOiAxMHB4IDEuNXJlbTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcblx0bWFyZ2luOiAwIDIwcHg7XHJcbn1cclxuXHJcbi5uYXZpdGVtczpob3ZlciB7XHJcblx0b3BhY2l0eTogMTtcclxufVxyXG5cclxuLm5hdml0ZW1zLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZDogIzAwQjA1MDtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCAycHggIzY2NjtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0Y3Vyc29yOiB1bnNldDtcclxufVxyXG5cclxuLm5hdmljb24ge1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm5hdml0ZW1zIGEge1xyXG5cdGNvbG9yOiB1bnNldDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZpdGVtcyBhOmhvdmVyIHtcclxuXHRjb2xvcjogdW5zZXQ7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4jbWFpbi1jb250ZW50IHtcclxuXHRtYXJnaW4tbGVmdDogMTYuNjY2NjY3JTtcclxufVxyXG5cclxuLnRhYnBhbmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cGFkZGluZzogMyUgMiU7XHJcbn1cclxuXHJcbi50YWJsZSB0Ym9keSB0ciB7XHJcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG4udGFibGUge1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRibGJnIHtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG5cdGJhY2tncm91bmQ6ICNmZmU2OTk0NDtcclxuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cdGJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggIzY2NjY7XHJcbn1cclxuXHJcbiNpdGVtcyAudGFibGUgdGJvZHkgdHIge1xyXG5cdHdvcmQtYnJlYWs6IGtlZXAtYWxsO1xyXG59XHJcblxyXG4jaXRlbWZvcm0ge1xyXG5cdG1hcmdpbjogMnJlbSBhdXRvIDNyZW0gYXV0bztcclxuXHR3aWR0aDogNzAlO1xyXG59XHJcblxyXG4jaXRlbWZvcm0gYnV0dG9uIHtcclxuXHRoZWlnaHQ6IDNyZW07XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwQjA1MDtcclxuXHRib3JkZXItY29sb3I6ICMwMEIwNTA7XHJcbn1cclxuXHJcbi5yb3cgLmNvbCB7XHJcblx0ZmxvYXQ6IHVuc2V0O1xyXG59XHJcblxyXG4udGFibGUgdHIsIC50YWJsZSB0ZCwgLnRhYmxlIHRoZWFkIHRoe1xyXG5cdGJvcmRlci1ib3R0b20tY29sb3I6ICNGRkMwMDA7XHJcblx0Ym9yZGVyLXRvcC1jb2xvcjogI0ZGQzAwMDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4jZmVlZGJhY2sgdWx7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdi10YWJzIC5uYXYtbGluay5hY3RpdmUge1xyXG5cdGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcblx0Ym9yZGVyLWNvbG9yOiAjZjhmOGY4ICNmOGY4ZjggI2VmNDc2ZjtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5uYXYtdGFicyAubmF2LWxpbms6aG92ZXIge1x0XHJcblx0Ym9yZGVyLWNvbG9yOiAjZjhmOGY4ICNmOGY4ZjggIzgwODA4MDtcclxuXHRib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi5yZXZpZXcge1xyXG5cdG1hcmdpbjogMiUgMjAlO1xyXG59XHJcblxyXG4uY29tY2FyZCB7XHJcblx0cGFkZGluZzogMXJlbTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZlNjk5NDQ7XHJcblx0Ym9yZGVyLXJhZGl1czogMjBweDtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggIzY2NjY7XHJcblx0bWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5jb21jdXN0IHtcclxuXHRmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmNvbXN0cnJvdywuY29tdGV4dCB7XHJcblx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbXN0cnJvdyB7XHJcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN0ciB7XHJcblx0d2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5iYW5ycm93IHtcclxuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5iYW5yY2FyZHMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0cGFkZGluZzogMXJlbSAxLjJyZW07XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRib3gtc2hhZG93OiAwcHggMHB4IDdweCAxcHggIzY2NjY7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5iYW5yY2FyZHMuc2FsZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZkZTJlNDtcclxufVxyXG5cclxuLmJhbnJjYXJkcy5vcmRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2JlZTFlNjtcclxufVxyXG5cclxuLmJhbnJjYXJkcy5jdXN0IHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGJjZGYwO1xyXG59XHJcblxyXG4uYmFucmNhcmRzIHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmJhbnJkYXRhIHtcclxuXHRmb250LXNpemU6IDEuNHJlbTtcclxuXHR0ZXh0LXNoYWRvdzogMHB4IDBweCAycHggIzAwMDY7XHJcbn1cclxuXHJcbi5iYW5yaW1nIHtcclxuXHRtYXgtd2lkdGg6IDMuNXJlbTtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customers/customers.component */ "4yXv");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staff/staff.component */ "k8PI");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _customers_customers_component__WEBPACK_IMPORTED_MODULE_6__["CustomersComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
        _staff_staff_component__WEBPACK_IMPORTED_MODULE_8__["StaffComponent"],
        _signin_signin_component__WEBPACK_IMPORTED_MODULE_9__["SigninComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();


/***/ }),

/***/ "frVr":
/*!***********************************!*\
  !*** ./src/app/orders.service.ts ***!
  \***********************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class OrdersService {
    constructor(http) {
        this.http = http;
        this.baseurl = "https://automatic-oms.herokuapp.com";
    }
    getbytoken(token) {
        return this.http.get(this.baseurl + "/api/getorder/" + token);
    }
    getOrders() {
        return this.http.get(this.baseurl + "/api/orders");
    }
    getallOrders() {
        return this.http.get(this.baseurl + "/api/allorders");
    }
    addOrder(newOrder) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/order', newOrder, { headers: headers });
    }
    reOrder(newOrder) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/reorder', newOrder, { headers: headers });
    }
    updatestatusstaf(status) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/updatestatusstaf', status, { headers: headers });
    }
    updatestatuscust(status) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/updatestatuscust', status, { headers: headers });
    }
    addfeedback(fdbk) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/addfeedback', fdbk, { headers: headers });
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
OrdersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "k8PI":
/*!******************************************!*\
  !*** ./src/app/staff/staff.component.ts ***!
  \******************************************/
/*! exports provided: StaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffComponent", function() { return StaffComponent; });
/* harmony import */ var _items_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items.service */ "15T6");
/* harmony import */ var _orders_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../orders.service */ "frVr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function StaffComponent_div_28_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Preparing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "On the way");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Served");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "li", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oitem_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](oitem_r5.item);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](oitem_r5.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "status-", oitem_r5.item_id, "");
} }
function StaffComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Payment: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Not yet paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "approve payment?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Expected time: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "ul", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "few");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "10");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "20");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "30");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " minutes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Ordered items:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Qty.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, StaffComponent_div_28_tr_39_Template, 15, 3, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Customer id: ", order_r2.customer_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Token no: ", order_r2.order_token, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Status: ", order_r2.order_status, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "paymode-", order_r2.order_token, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "payappr-btn-", order_r2.order_token, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "preptime-", order_r2.order_token, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", order_r2.order_item);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Subtotal: ", order_r2.subtotal, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Grandtotal: ", order_r2.grandtotal, "");
} }
function StaffComponent_div_34_tr_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const inv_item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](inv_item_r10.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "i-", inv_item_r10._id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "i-", inv_item_r10._id, "");
} }
function StaffComponent_div_34_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, StaffComponent_div_34_tr_12_ng_container_1_Template, 6, 3, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inv_item_r10 = ctx.$implicit;
    const cate_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", inv_item_r10.category == cate_r7);
} }
function StaffComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "table", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Availabality");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, StaffComponent_div_34_tr_12_Template, 2, 1, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cate_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](cate_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.inv_items);
} }
class StaffComponent {
    constructor(ordersService, itemsService, activRoute) {
        this.ordersService = ordersService;
        this.itemsService = itemsService;
        this.activRoute = activRoute;
        this.orders = [];
        this.tokenlist = [];
    }
    ngOnInit() {
        this.activRoute.queryParams.subscribe(params => {
            var stkn = window.localStorage.getItem('stafftkn');
            if (stkn == null)
                window.location.href = '/signin';
            else {
                if (stkn != params.p)
                    window.location.href = '/signin';
                else {
                    $(window).on('load', function () {
                        setTimeout(function () {
                            $('.splash').fadeOut();
                        }, 500);
                    });
                }
            }
        });
        this.ordersService.getOrders()
            .subscribe((orders) => {
            // console.log(orders);
            if (orders.length == 0) {
                $('#noorders').show();
                setInterval(() => {
                    udtlist();
                }, 4000);
            }
            else {
                this.orders = orders;
                setTimeout(() => {
                    orders.forEach((e) => {
                        this.tokenlist.push(e.order_token);
                        let i = $('ul#preptime-' + e.order_token);
                        switch (e.preptime) {
                            case "few":
                                i.find('li.few').toggleClass('active');
                                break;
                            case "10":
                                i.find('li.ten').toggleClass('active');
                                break;
                            case "20":
                                i.find('li.twnty').toggleClass('active');
                                break;
                            case "30":
                                i.find('li.thrty').toggleClass('active');
                                break;
                            default:
                                return;
                        }
                        e.order_item.forEach((ele) => {
                            if (ele.status == "wait") {
                                $('ul#status-' + ele.item_id).find('li.prep').toggleClass('active');
                                return;
                            }
                            $('ul#status-' + ele.item_id).find('li.' + ele.status).toggleClass('active');
                        });
                    });
                    setTimeout(() => {
                        this.orders.forEach((o) => {
                            if (!($('#preptime-' + o.order_token).hasClass('initd'))) {
                                udtstatus(o);
                                $('#preptime-' + o.order_token).addClass('initd');
                            }
                        });
                        setInterval(() => {
                            udtlist();
                        }, 2000);
                    }, 2000);
                }, 500);
            }
        });
        // udtstatus function is timer to check order_item list items status and 
        // sync with the db
        const udtstatus = ((o) => {
            let tknstatus;
            setInterval(() => {
                tknstatus = { tkn: "", preptime: "", itemarr: [] };
                tknstatus.tkn = o.order_token;
                tknstatus.preptime = String($('ul#preptime-' + o.order_token).find('li.active').text());
                tknstatus.preptime = (tknstatus.preptime == "") ? "20" : tknstatus.preptime;
                o.order_item.forEach((oitem) => {
                    tknstatus.itemarr.push({
                        id: oitem.item_id,
                        status: String($('ul#status-' + oitem.item_id).find('li.active').attr('class')).split(' ')[1]
                    });
                });
                // console.log('tknstatus- ',tknstatus);
                this.ordersService.updatestatusstaf(tknstatus)
                    .subscribe((res) => {
                    // console.log(res);
                    this.orders.forEach(e => {
                        if (e.order_token == res.tkn) {
                            if (res.itemarr.length > 0) {
                                res.itemarr.forEach((item) => {
                                    if ($('ul#status-' + item.item_id).length == 0 && item.status == "wait") {
                                        e.order_item.push(item);
                                        setTimeout(() => {
                                            $('ul#status-' + item.item_id).find('li.prep').toggleClass('active');
                                        }, 500);
                                        return;
                                    }
                                    if (item.status == "cncl") {
                                        $('ul#status-' + item.item_id).find('li.active').toggleClass('active');
                                        $('ul#status-' + item.item_id).find('li.cncl').toggleClass('active');
                                    }
                                });
                                e.subtotal = res.subtotal;
                                e.grandtotal = res.grandtotal;
                            }
                            if (res.feedback != 0 && res.status == "inactive") {
                                e.order_status = "inactive";
                                $('#paymode-' + e.order_token).text(res.payment_mode);
                                let pbtn = $('#payappr-btn-' + e.order_token);
                                pbtn.show();
                            }
                        }
                    });
                });
            }, 4000);
        });
        // udtlist function is timer to check for new orders and add them to orders list
        // and start their own udtstatus timer
        const udtlist = (() => {
            this.ordersService.getOrders()
                .subscribe((orders) => {
                if (orders.length == 0)
                    $('#noorders').show();
                else {
                    $('#noorders').hide();
                    orders.forEach((e1) => {
                        if (!(this.tokenlist.includes(e1.order_token))) {
                            // console.log(e1);
                            this.orders.push(e1);
                            this.tokenlist.push(e1.order_token);
                            setTimeout(() => {
                                let i = $('ul#preptime-' + e1.order_token);
                                switch (e1.preptime) {
                                    case "few":
                                        i.find('li.few').toggleClass('active');
                                        break;
                                    case "10":
                                        i.find('li.ten').toggleClass('active');
                                        break;
                                    case "20":
                                        i.find('li.twnty').toggleClass('active');
                                        break;
                                    case "30":
                                        i.find('li.thrty').toggleClass('active');
                                        break;
                                    default:
                                        return;
                                }
                                e1.order_item.forEach((e2) => {
                                    if (e2.status == "wait") {
                                        $('ul#status-' + e2.item_id).find('li.prep').toggleClass('active');
                                        return;
                                    }
                                    $('ul#status-' + e2.item_id).find('li.' + e2.status).toggleClass('active');
                                });
                                if (!($('#preptime-' + e1.order_token).hasClass('initd'))) {
                                    udtstatus(e1);
                                    $('#preptime-' + e1.order_token).addClass('initd');
                                }
                            }, 500);
                        }
                    });
                }
            });
        });
        this.itemsService.getMenu()
            .subscribe((items) => {
            this.categarr = [...new Set(items.map((item) => String(item.category)))];
            this.inv_items = items;
            setTimeout(() => {
                this.inv_items.forEach(item => {
                    if (item.available == true) {
                        $('#i-' + item._id).prop('checked', 'true');
                    }
                    $(document).on('change', '#i-' + item._id, function () {
                        let udtitem;
                        udtitem = {
                            id: String(item._id),
                            avail: $('#i-' + item._id).is(':checked')
                        };
                        udtavail(udtitem);
                    });
                });
            }, 1000);
            // console.log(items);
        });
        const udtavail = ((udtitem) => {
            // console.log(udtitem);
            this.itemsService.udtavail(udtitem)
                .subscribe((res) => {
                // console.log(res);
            });
        });
        $(document).on('click', '.payappr', function () {
            $(this).addClass('disabled');
            $(this).attr('disabled', 'true');
            $(this).parent().html(" -- Approved.");
        });
        $(document).on('click', '.discard', function () {
            $(this).parent().fadeOut();
        });
        $(document).on('click', '#stafflogout', function () {
            window.localStorage.removeItem('stafftkn');
            alert('Successfully Logged out!');
            window.location.href = '/signin';
        });
        $('.tabpane.active').fadeIn();
        $(document).on('click', '.navitems:not(.logout) span', function () {
            var _a, _b;
            $('.navitems.active').toggleClass('active');
            $(this).parent().toggleClass('active');
            let tabid = String((_a = $(this).attr('id')) === null || _a === void 0 ? void 0 : _a.substr(Number((_b = $(this).attr('id')) === null || _b === void 0 ? void 0 : _b.indexOf('-')) + 1));
            $('.tabpane.active').fadeOut(300, function () {
                $('#' + tabid).fadeIn(300);
                $(this).toggleClass('active');
                $('#' + tabid).toggleClass('active');
            });
        });
        $(document).on('click', '.list-group-item', function () {
            $(this).parent().find('.list-group-item.active').toggleClass('active');
            $(this).toggleClass('active');
        });
    }
}
StaffComponent.ɵfac = function StaffComponent_Factory(t) { return new (t || StaffComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_items_service__WEBPACK_IMPORTED_MODULE_0__["ItemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
StaffComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StaffComponent, selectors: [["app-staff"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_orders_service__WEBPACK_IMPORTED_MODULE_1__["OrdersService"], _items_service__WEBPACK_IMPORTED_MODULE_0__["ItemsService"]])], decls: 35, vars: 2, consts: [[1, "container"], [1, "splash", 2, "display", "block"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid"], ["d", "M20 50A30 30 0 0 0 80 50A30 32 0 0 1 20 50", "fill", "#000000", "stroke", "none"], ["attributeName", "transform", "type", "rotate", "dur", "1s", "repeatCount", "indefinite", "keyTimes", "0;1", "values", "0 50 51;360 50 51"], [1, "row"], [1, "col-lg-2", "nav-panel"], ["src", "../../assets/images/beanery name.png", "alt", "", 1, "navlogo"], [1, "navitems", "active"], ["src", "../../assets/images/orders.png", "alt", "", 1, "navicon"], ["id", "l-orders"], [1, "navitems"], ["src", "../../assets/images/items.png", "alt", "", 1, "navicon"], ["id", "l-items"], [1, "navitems", "logout"], ["src", "../../assets/images/logout.png", "alt", "", 1, "navicon"], ["id", "stafflogout"], ["id", "main-content", 1, "col-lg-10"], ["id", "orders", 1, "tabpane", "active"], [1, "col-lg", "12", "order-row"], ["id", "noorders"], ["class", "card", 4, "ngFor", "ngForOf"], ["id", "items", 1, "tabpane"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "card"], [1, "discard"], ["src", "../../assets/images/clear.png", 1, "discardimg"], [3, "id"], [1, "btn", "btn-sm", "btn-outline-danger", "payappr", 3, "id"], [1, "preptime-row"], [1, "list-group", "list-group-horizontal", 3, "id"], [1, "list-group-item", "few"], [1, "list-group-item", "ten"], [1, "list-group-item", "twnty"], [1, "list-group-item", "thrty"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "paydtls"], [1, "paygtamt"], [1, "sts-td"], [1, "list-group-item", "prep"], [1, "list-group-item", "otw"], [1, "list-group-item", "serv"], [1, "list-group-item", "cncl"], [1, "col-lg-4"], [4, "ngIf"], ["type", "checkbox", 1, "tgl", "tgl-light", 3, "id"], [1, "tgl-btn", 3, "for"]], template: function StaffComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "animateTransform", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Current Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Their are no current orders!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, StaffComponent_div_28_Template, 46, 9, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Inventory");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, StaffComponent_div_34_Template, 13, 2, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.orders);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.categarr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  max-width: unset;\n  padding: 0;\n  overflow-x: hidden;\n  font-family: nunito, \"Segoe UI\";\n}\n\n@font-face {\n  font-family: nunito;\n  src: url('nunito.ttf');\n}\n\n.splash[_ngcontent-%COMP%] {\n  position: fixed;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #FFE699;\n  z-index: 3;\n}\n\n.splash[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin: auto;\n  display: block;\n  shape-rendering: auto;\n  width: 10%;\n  margin-top: 20%;\n}\n\n.nav-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  height: 100%;\n  background-color: #C5E0B4;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  padding: 1% 0;\n  text-align: center;\n}\n\n.navlogo[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.navitems[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  padding: 10px 1.5rem;\n  opacity: 0.8;\n  margin: 0 20px;\n  align-items: center;\n}\n\n.navitems[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.navitems.active[_ngcontent-%COMP%] {\n  background: #00B050;\n  box-shadow: inset 0px 0px 5px 2px #666;\n  border-radius: 10px;\n  color: #fff;\n  opacity: 1;\n  cursor: unset;\n}\n\n.navicon[_ngcontent-%COMP%] {\n  width: 25px;\n  margin-right: 20px;\n}\n\n.navitems[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n#main-content[_ngcontent-%COMP%] {\n  margin-left: 16.666667%;\n}\n\n.tabpane[_ngcontent-%COMP%] {\n  display: none;\n  padding: 3% 2%;\n}\n\n.card[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 2rem 0;\n  box-shadow: 1px 1px 5px gray;\n  background-color: #ffe69988;\n}\n\n#noorders[_ngcontent-%COMP%] {\n  display: none;\n  margin-top: 5%;\n}\n\n.sts-td[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .preptime-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.sts-td[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .preptime-row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 3px;\n}\n\n.discard[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 10px;\n  cursor: pointer;\n}\n\n.discardimg[_ngcontent-%COMP%] {\n  max-width: 40px;\n  opacity: 0.7;\n}\n\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #00b05088;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  border-bottom: unset;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\ntable[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid #00b05088;\n  line-height: 1;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.list-group[_ngcontent-%COMP%] {\n  margin: 0 1rem;\n}\n\n.list-group-item[_ngcontent-%COMP%] {\n  background: unset;\n  border: 1px solid grey;\n  padding: 8px 15px;\n  line-height: 1;\n}\n\n.list-group-item[_ngcontent-%COMP%]:not(.active) {\n  cursor: pointer;\n}\n\n.list-group-item.active[_ngcontent-%COMP%] {\n  background-color: #FFC000bb;\n  border-color: gray;\n  box-shadow: inset 0px 0px 5px gray;\n  color: #000;\n}\n\n.preptime-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 0.5rem 0;\n}\n\n.paydtls[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-right: 1rem;\n}\n\n.paygtamt[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.payappr[_ngcontent-%COMP%] {\n  display: none;\n  margin-left: 2rem;\n  margin-top: -5px;\n  height: 2rem;\n}\n\n.btn[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus {\n  background-color: unset;\n}\n\n#items[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%]    > .col-lg-4[_ngcontent-%COMP%] {\n  display: inline-block;\n  float: none;\n}\n\n#items[_ngcontent-%COMP%]    > .row[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  white-space: nowrap;\n  display: block;\n}\n\n.tgl[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.tgl[_ngcontent-%COMP%], .tgl[_ngcontent-%COMP%]:after, .tgl[_ngcontent-%COMP%]:before, .tgl[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .tgl[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after, .tgl[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before, .tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.tgl[_ngcontent-%COMP%]::selection, .tgl[_ngcontent-%COMP%]:after::selection, .tgl[_ngcontent-%COMP%]:before::selection, .tgl[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::selection, .tgl[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:after::selection, .tgl[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:before::selection, .tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%]::selection {\n  background: none;\n}\n\n.tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%] {\n  outline: 0;\n  display: block;\n  width: 3em;\n  height: 1.5em;\n  position: relative;\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  margin-bottom: 0;\n}\n\n.tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%]:after, .tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%]:before {\n  position: relative;\n  display: block;\n  content: \"\";\n  width: 50%;\n  height: 100%;\n}\n\n.tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%]:after {\n  left: 0;\n}\n\n.tgl[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%]:before {\n  display: none;\n}\n\n.tgl[_ngcontent-%COMP%]:checked    + .tgl-btn[_ngcontent-%COMP%]:after {\n  left: 50%;\n}\n\n.tgl-light[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%] {\n  background: #ff8080;\n  border-radius: 2em;\n  padding: 2px;\n  transition: all 0.4s ease;\n}\n\n.tgl-light[_ngcontent-%COMP%]    + .tgl-btn[_ngcontent-%COMP%]:after {\n  border-radius: 50%;\n  background: #fff;\n  transition: all 0.2s ease;\n}\n\n.tgl-light[_ngcontent-%COMP%]:checked    + .tgl-btn[_ngcontent-%COMP%] {\n  background: #4CD571;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0YWZmLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBQUQ7O0FBR0E7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxZQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFBRDs7QUFHQTtFQUNDLFVBQUE7QUFBRDs7QUFHQTtFQUNDLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQUFEOztBQUdBO0VBQ0MsV0FBQTtFQUNBLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxlQUFBO0FBQUQ7O0FBR0E7RUFDQyx1QkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QUFBRDs7QUFHQTtFQUNDLGFBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUFEOztBQUdBO0VBQ0MsYUFBQTtFQUNBLGNBQUE7QUFBRDs7QUFHQTtFQUNDLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxpQkFBQTtBQUFEOztBQUdBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FBQUQ7O0FBR0E7RUFDQyxxQkFBQTtBQUFEOztBQUdBO0VBQ0MsMkJBQUE7QUFBRDs7QUFHQTtFQUNDLG9CQUFBO0FBQUQ7O0FBR0E7RUFDQyxzQkFBQTtBQUFEOztBQUdBO0VBQ0MsMkJBQUE7RUFDQSxjQUFBO0FBQUQ7O0FBR0E7RUFDQyxrQkFBQTtBQUFEOztBQUdBO0VBQ0MsZ0JBQUE7QUFBRDs7QUFHQTtFQUNDLGNBQUE7QUFBRDs7QUFHQTtFQUNDLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7QUFBRDs7QUFHQTtFQUNDLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLFdBQUE7QUFBRDs7QUFHQTtFQUNDLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBQUQ7O0FBR0E7RUFDQyxpQkFBQTtFQUNBLGtCQUFBO0FBQUQ7O0FBR0E7RUFDQyxpQkFBQTtFQUNBLGlCQUFBO0FBQUQ7O0FBR0E7RUFDQyxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRDs7QUFHQTtFQUNDLHVCQUFBO0FBQUQ7O0FBR0E7RUFDQyxxQkFBQTtFQUNBLFdBQUE7QUFBRDs7QUFFQTtFQUNDLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0FBQ0Q7O0FBQ0M7RUFPQyxzQkFBQTtBQUxGOztBQU1FO0VBQ0MsZ0JBQUE7QUFKSDs7QUFRQztFQUNDLFVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFPRTtFQUVDLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQU5IOztBQVNFO0VBQ0MsT0FBQTtBQVBIOztBQVVFO0VBQ0MsYUFBQTtBQVJIOztBQVlDO0VBQ0MsU0FBQTtBQVZGOztBQWVDO0VBQ0MsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQVpGOztBQWFFO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBWEg7O0FBZUM7RUFDQyxtQkFBQTtBQWJGIiwiZmlsZSI6InN0YWZmLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0bWFyZ2luOiAwO1xyXG5cdG1heC13aWR0aDogdW5zZXQ7XHJcblx0cGFkZGluZzogMDtcclxuXHRvdmVyZmxvdy14OiBoaWRkZW47XHJcblx0Zm9udC1mYW1pbHk6IG51bml0bywgJ1NlZ29lIFVJJztcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IG51bml0bztcclxuXHRzcmM6IHVybChcIi4uLy4uL2Fzc2V0cy9mb250L251bml0by50dGZcIik7XHJcbn1cclxuXHJcbi5zcGxhc2gge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGRTY5OTtcclxuXHR6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uc3BsYXNoIHN2ZyB7XHJcblx0bWFyZ2luOiBhdXRvO1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdHNoYXBlLXJlbmRlcmluZzogYXV0bztcclxuXHR3aWR0aDogMTAlO1xyXG5cdG1hcmdpbi10b3A6IDIwJTtcclxufVxyXG5cclxuLm5hdi1wYW5lbCB7XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQzVFMEI0O1xyXG5cdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG5cdHBhZGRpbmc6IDElIDA7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubmF2bG9nbyB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4ubmF2aXRlbXMge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuXHRwYWRkaW5nOiAxMHB4IDEuNXJlbTtcclxuXHRvcGFjaXR5OiAwLjg7XHJcblx0bWFyZ2luOiAwIDIwcHg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdml0ZW1zOmhvdmVyIHtcclxuXHRvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubmF2aXRlbXMuYWN0aXZlIHtcclxuXHRiYWNrZ3JvdW5kOiAjMDBCMDUwO1xyXG5cdGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNXB4IDJweCAjNjY2O1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0b3BhY2l0eTogMTtcclxuXHRjdXJzb3I6IHVuc2V0O1xyXG59XHJcblxyXG4ubmF2aWNvbiB7XHJcblx0d2lkdGg6IDI1cHg7XHJcblx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubmF2aXRlbXMgc3BhbiB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbWFpbi1jb250ZW50IHtcclxuXHRtYXJnaW4tbGVmdDogMTYuNjY2NjY3JTtcclxufVxyXG5cclxuLnRhYnBhbmUge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0cGFkZGluZzogMyUgMiU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cdG1hcmdpbjogMnJlbSAwO1xyXG5cdGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGdyYXk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogICNmZmU2OTk4ODtcclxufVxyXG5cclxuI25vb3JkZXJzIHtcclxuXHRkaXNwbGF5OiBub25lO1xyXG5cdG1hcmdpbi10b3A6IDUlO1xyXG59XHJcblxyXG4uc3RzLXRkIGxhYmVsLCAucHJlcHRpbWUtcm93IGxhYmVse1xyXG5cdG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnN0cy10ZCBpbnB1dCwgLnByZXB0aW1lLXJvdyBpbnB1dCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAzcHg7XHJcbn1cclxuXHJcbi5kaXNjYXJkIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0cmlnaHQ6IDE1cHg7XHJcblx0dG9wOiAxMHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRpc2NhcmRpbWcge1xyXG5cdG1heC13aWR0aDogNDBweDtcclxuXHRvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5jYXJkIHAge1xyXG5cdG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxudGggeyBcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDBiMDUwODg7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcblx0Ym9yZGVyLWJvdHRvbTogdW5zZXQ7XHJcbn1cclxuXHJcbi50YWJsZSB0ZCwgLnRhYmxlIHRoIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG50YWJsZSwgdHIsIHRkIHsgXHJcblx0Ym9yZGVyOiAxcHggc29saWQgIzAwYjA1MDg4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG50ZCB7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcblx0bWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXAge1xyXG5cdG1hcmdpbjogMCAxcmVtO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtIHtcclxuXHRiYWNrZ3JvdW5kOiB1bnNldDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG5cdHBhZGRpbmc6IDhweCAxNXB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtOm5vdCguYWN0aXZlKSB7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlzdC1ncm91cC1pdGVtLmFjdGl2ZSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0ZGQzAwMGJiO1xyXG5cdGJvcmRlci1jb2xvcjogZ3JheTtcclxuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDVweCBncmF5O1xyXG5cdGNvbG9yOiAjMDAwO1xyXG59XHJcblxyXG4ucHJlcHRpbWUtcm93IHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0bWFyZ2luOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLnBheWR0bHMge1xyXG5cdHRleHQtYWxpZ246IHJpZ2h0O1xyXG5cdG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnBheWd0YW10IHtcclxuXHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnBheWFwcHIge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcblx0bWFyZ2luLWxlZnQ6IDJyZW07XHJcblx0bWFyZ2luLXRvcDogLTVweDtcclxuXHRoZWlnaHQ6IDJyZW07XHJcbn1cclxuXHJcbi5idG46Zm9jdXMsIGJ1dHRvbjpmb2N1cyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuXHJcbiNpdGVtcyA+IC5yb3cgPiAuY29sLWxnLTQge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmbG9hdDogbm9uZTtcclxufVxyXG4jaXRlbXMgPiAucm93IHtcclxuXHRvdmVyZmxvdy14OiBhdXRvO1xyXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuICBcclxuLnRnbCB7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuICBcclxuXHQmLFxyXG5cdCY6YWZ0ZXIsXHJcblx0JjpiZWZvcmUsXHJcblx0JiAqLFxyXG5cdCYgKjphZnRlcixcclxuXHQmICo6YmVmb3JlLFxyXG5cdCYgKyAudGdsLWJ0biB7XHJcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0Jjo6c2VsZWN0aW9uIHtcclxuXHRcdFx0YmFja2dyb3VuZDogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcblx0KyAudGdsLWJ0biB7XHJcblx0XHRvdXRsaW5lOiAwO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHR3aWR0aDogM2VtO1xyXG5cdFx0aGVpZ2h0OiAxLjVlbTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMDtcclxuXHRcdCY6YWZ0ZXIsXHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdHdpZHRoOiA1MCU7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdH1cclxuICAgIFxyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHR9XHJcbiAgICBcclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcblx0JjpjaGVja2VkICsgLnRnbC1idG46YWZ0ZXIge1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdH1cclxufVxyXG5cclxuLnRnbC1saWdodCB7XHJcblx0KyAudGdsLWJ0biB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmY4MDgwO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xyXG5cdFx0cGFkZGluZzogMnB4O1xyXG5cdFx0dHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxuXHQmOmNoZWNrZWQgKyAudGdsLWJ0biB7XHJcblx0XHRiYWNrZ3JvdW5kOiAjNENENTcxO1xyXG5cdH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "niAj":
/*!**************************************!*\
  !*** ./src/app/customers.service.ts ***!
  \**************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CustomersService {
    constructor(http) {
        this.http = http;
        this.baseurl = "https://automatic-oms.herokuapp.com";
    }
    getCustomers() {
        return this.http.get(this.baseurl + '/api/customers');
    }
    addCust(newCust) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.baseurl + '/api/customer', newCust, { headers: headers });
    }
    getCust(id) {
        return this.http.get(this.baseurl + '/api/customer/' + id);
    }
}
CustomersService.ɵfac = function CustomersService_Factory(t) { return new (t || CustomersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CustomersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CustomersService, factory: CustomersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "TGkX");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers/customers.component */ "4yXv");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _staff_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff/staff.component */ "k8PI");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin/signin.component */ "/hi3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    { path: '', redirectTo: '/customers', pathMatch: 'full' },
    { path: 'menu', component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"] },
    { path: 'staff', component: _staff_staff_component__WEBPACK_IMPORTED_MODULE_4__["StaffComponent"] },
    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xloE":
/*!***********************************!*\
  !*** ./src/app/tokens.service.ts ***!
  \***********************************/
/*! exports provided: TokensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensService", function() { return TokensService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class TokensService {
    constructor(http) {
        this.http = http;
        this.baseurl = "https://automatic-oms.herokuapp.com";
    }
    getTokcount() {
        let date = new Date();
        let datestr = date.toLocaleDateString("en-IN", { year: '2-digit', month: '2-digit', day: '2-digit' }).split('/').join('');
        return this.http.get(this.baseurl + "/api/token/" + datestr);
    }
    getTokens() {
        return this.http.get(this.baseurl + "/api/tokens");
    }
}
TokensService.ɵfac = function TokensService_Factory(t) { return new (t || TokensService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TokensService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokensService, factory: TokensService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
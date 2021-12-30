var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombreParametro, apellidoParametro) {
        this.nombreyApellido = '';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreyApellido = nombreParametro + ' ' + apellidoParametro;
    }
    Persona.prototype.mostrarNombreyApellido = function () {
        return this.nombreyApellido;
    };
    Persona.nombreReferencial = 'Humano';
    return Persona;
}());
var Uuario = /** @class */ (function (_super) {
    __extends(Uuario, _super);
    function Uuario(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        var _this = _super.call(this, nombreParametro, apellidoParametro) || this;
        _this.cedula = cedula;
        _this.estadoCivil = estadoCivil;
        return _this;
    }
    return Uuario;
}(Persona));
var andres = new Uuario('Andres', 'Vargas', '1718959321', 'soltero');
andres.nombre;
andres.cedula;
andres.apellido;
andres.estadoCivil;

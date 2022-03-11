export interface ComprobanteInterface {
  _id?: string,
  fecha: string,
  subtotal: number,
  total: number,
  estadoComprobante: string,
  tipoComprobante: string,
  detalle: string,
  descuentoCumpleanos: number,
  clienteID: string,
}

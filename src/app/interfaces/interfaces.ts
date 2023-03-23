export interface RespuestaToHeadLine {
    status_code: string,
    request_result: string,
    data : Datos
}

export interface Datos {
    bmi: string,
    health: string,
    healthy_bmi_range: string
}

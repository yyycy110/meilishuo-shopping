/* 
格式化时间 分别获取 年月日 然后进行拼接
*/
export function format(date){
    const Year = date.getFullYear();
    const Mouth = date.getMonth();
    const today = date.getDate();

 const result = Year+'-'+Mouth+'-'+today;

 return result

}
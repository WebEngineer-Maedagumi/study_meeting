// 今日の天気予報は雨の場合、傘を準備する。
let weather = "雨"
if(weather === "雨"){
    alert("傘を準備する。")
}
// 今日の天気予報は雨の場合、傘を準備する。雨以外の場合は傘を準備しない。
let weather = "雨"
if(weather === "雨"){
    alert("傘を準備する。")
}else{
    alert("傘を準備しない。")
}
// 今日の天気予報は雨の場合、傘を準備する。なお、『紫外線警報』の場合は、傘とサンオイルを準備する。その以外、傘を準備しない。
let weather = "紫外線警報"
if(weather === "雨"){
    alert("傘を準備する。")
}else if(weather === "紫外線警報"){
    alert("傘とサンオイルを準備する。")
}else{
    alert("傘を準備しない。")
}
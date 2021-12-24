/* 
    桶排序
*/


// 桶排序
let bucketSort = (arr) => {
    let bucket = [], res = []
    
    arr.forEach((value, key) => {
        // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
        if(!bucket[value]) {
            bucket[value] = [key]
        } else {
            bucket[value].push(key)
        }
    })

    // 遍历获取出现频率
    for(let i = 0;i <= bucket.length - 1;i++){
        if(bucket[i]) {
            res.push(...bucket[i])
        }
 }
 return res
}


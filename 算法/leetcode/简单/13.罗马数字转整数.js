/*
罗马数字包含以下七种字符：I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例
例如 4 不写做 IIII，而是 IV，数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。

示例 1:

输入: "III"
输出: 3
示例 2:

输入: "IV"
输出: 4
示例 3:

输入: "IX"
输出: 9
示例 4:

输入: "LVIII"
输出: 58
解释: C = 100, L = 50, XXX = 30, III = 3.
示例 5:

输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
*/

// 思路： 将所有字符进行数值转换，在进行循环判断，相加或者相减
// 时间复杂度：o(n)

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const charValueMap = new Map()
    
    charValueMap.set('I', 1)
    charValueMap.set('V', 5)
    charValueMap.set('X', 10)
    charValueMap.set('L', 50)
    charValueMap.set('C', 100)
    charValueMap.set('D', 500)
    charValueMap.set('M', 1000)

    const stringArr = s.split('')
    let result = 0

    // 避开判断最后一位
    for(let i = 0; i < stringArr.length - 1; i++) {
      if (charValueMap.get(stringArr[i]) < charValueMap.get(stringArr[i + 1])) {
        result -= charValueMap.get(stringArr[i])
      } else {
        result += charValueMap.get(stringArr[i])
      }
    }

    // 最后一位直接相加，不用走前面的 加减 判断逻辑
    return result + charValueMap.get(stringArr[stringArr.length - 1])
}

console.log(romanToInt("IV"))
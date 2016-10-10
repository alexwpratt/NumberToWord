function checkNumber() {
    var number = document.getElementById("tb_number").value;

    document.getElementById("lbl_results").innerHTML = getListAllPossibilities(number);
    document.getElementById("lbl_results_dictionary").innerHTML = "HELLO";
}



function getListAllPossibilities(entry) {
    var word_array = "";
    var column_max = 4;
    var all_possibilities = [""];

    //fill the array
    for (var x = 0; x < entry.length; x++) {
        var position_possibilities = "";
        for (var y = 0; y < column_max; y++) {
            position_possibilities = getLettersForOneDigit(entry[x]);
        }
        all_possibilities[x] = position_possibilities;
    }
    word_array = allPossibleCases(all_possibilities); //get all results with recursion
    return printArray(word_array);
}

function allPossibleCases(arr) {
    if (arr.length == 1) {
        return arr[0]; // end case
    } else {
        var result = [];
        var allCasesOfRest = allPossibleCases(arr.slice(1)); // recur with the rest of array
        for (var i = 0; i < allCasesOfRest.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                result.push(arr[0][j] + allCasesOfRest[i]);
            }
        }
        return result;
    }
}

function printArray(array) {
    var list_results = "All Possible Results:<br><br>";
    for (var i = 0; i < array.length; i++) {
        list_results += array[i];
        list_results += "<br>";
    }
    return list_results;
}

function getAllLetterLists(entry) {
    var word_array = "";

    for (var i = 0, len = entry.length; i < len; i++) {
        word_array += [getLettersForOneDigit(entry[i])];
        word_array += "<br>";
    }

    return word_array;
}


function getLettersForOneDigit(digit) {
    var letter_array = "";
    switch (digit) {
        case "1":
            letter_array = [" "];
            break;
        case "2":
            letter_array = ["A", "B", "C"];
            break;
        case "3":
            letter_array = ["D", "E", "F"];
            break;
        case "4":
            letter_array = ["G", "H", "I"];
            break;
        case "5":
            letter_array = ["J", "K", "L"];
            break;
        case "6":
            letter_array = ["M", "N", "O"];
            break;
        case "7":
            letter_array = ["P", "Q", "R", "S"];
            break;
        case "8":
            letter_array = ["T", "U", "V"];
            break;
        case "9":
            letter_array = ["W", "X", "Y", "Z"];
            break;
        case "0":
            letter_array = ["+"];
            break;
        default:
            letter_array = ["?"];
    }
    return letter_array;
}

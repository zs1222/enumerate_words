
$(document).ready(function () {
    var p = $('p');
    var s = $('p').text();
    p.css({
        cursor: 'pointer'
    });
    p.dblclick(function (e) {
        var message = [];
        $("#content").empty();
        var content = '';
        var range = window.getSelection() || document.getSelection() || document.selection.createRange();
        // find the selected text posstion
        var sel = range;
        var div = document.getElementById("text");
        if (sel.rangeCount) {
            // Get the selected range
            var word_range = sel.getRangeAt(0);
            // Check that the selection is wholly contained within the div text
            if (word_range.commonAncestorContainer == div.firstChild) {
                var precedingRange = document.createRange();
                precedingRange.setStartBefore(div.firstChild);
                precedingRange.setEnd(word_range.startContainer, word_range.startOffset);
                var textPrecedingSelection = precedingRange.toString();
                var wordIndex = textPrecedingSelection.split(/\s+/).length;                
                wordIndex = parseInt(wordIndex);
                //content += '<div class="col-12"><div class="data_list"><p>' + wordIndex + ' Word in the chapter</p></div></div>';                
                content += '<div class="col-12"><div class="data_list"><p>' + wordIndex + ' كلمة في الفصل</p></div></div>';                
            }
        }
        // selected text possion end
        var word = $.trim(range.toString());
        if (word != '') {
            var temp = range.anchorOffset;
            var space_count = 0;
            for (var j = 0; j < temp; j++) {
                if (s.charAt(j) === ' ') {
                    space_count += 1;
                }
            }
            temp = temp - space_count;            
            for (var i = 0; i < word.length; i++) {
                var charPossition = temp + i + 1;
                var s1 = s.replace(/\s/g, '');
                var charCount = char_count(s1, word.charAt(i), charPossition);
                //content += '<div class="col-12"><div class="data_list"><p>' + word.charAt(i) + ' - ' + charPossition + ' letter in chapter</p><span>' + charCount + ' letter ' + word.charAt(i) + ' in the chapter</span></div></div>';
                content += '<div class="col-12"><div class="data_list"><p>' + word.charAt(i) + ' - ' + charPossition + ' رسالة في الفصل</p><span>' + charCount + ' رسالة ' + word.charAt(i) + ' في الفصل</span></div></div>';
            }
            $("#content").append(content);
            $('#myModal').modal('show');
        }
        e.stopPropagation();
    });
});

function char_count(str, letter, length) {
    var letter_Count = 0;
    for (var position = 0; position < length; position++) {
        if (str.charAt(position) == letter) {
            letter_Count += 1;
        }
    }
    return letter_Count;
}


        
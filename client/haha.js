Template.haha.events(
    {'click [name=submit]': function (e, tmpl) {
        var title = $('[name=title]').val();
        var num = $('[name=num]').val();
        var content = $('[name=content]').val();
        var count = $('[name=count]').val();

        var obj = {
            '제목': title,
            '글번호': num,
            '조회수': count,
            '내용': content
        }


        // 1. 입력이라면
        if ($('[name=hidden_id]').val().length <= 0 ) {
            console.log(obj);
            CollectionBoard.insert(obj);
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=content]').val('');
            $('[name=count]').val('');
            $('[name=hidden_id]').val('');
        } else {  // 2. 수정이라면
            CollectionBoard.update($('[name=hidden_id]').val(), {$set: obj});
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=content]').val('');
            $('[name=count]').val('');
            $('[name=hidden_id]').val('');
        }

    },
     'click [name=deleteBoard]': function(element, tmpl) { // 클릭된 곳의 요소와 템플릿전체
         // 지우는 뭔가를 여기에
         var id = $(element.target).attr('id'); // 요소의 id를 가져옴
         // var id = this._id;
         CollectionBoard.remove({_id:id});
         console.log('삭제버튼이 눌렸습니다.');
     },
     'click [name=updateBoard]': function(e, tmpl) {
         console.log('수정버튼이 눌렸습니다.');
         // 1. 입력 모달을 띄운다.
         $('#modal-div').modal('show');
         // 2. 모달의 인풋창에 기존 데이터를 채워넣는다.
         //         console.log(this._id);
         //         console.log(this.글번호);
         //         console.log(this.조회수);
         //         console.log(this.제목);
         //         console.log(this.내용);

         $('[name=hidden_id]').val(this._id);
         $('[name=title]').val(this.제목);
         $('[name=num]').val(this.글번호);
         $('[name=count]').val(this.조회수);
         $('[name=content]').val(this.내용);
     }
    })

Template.haha.helpers({
    list: function(){
        var result = CollectionBoard.find().fetch()
        console.log(result)
        //        var result =[
        //            {
        //                '글번호': 1,
        //                '제목': "제목1",
        //                '조회수': 15
        //            },
        //            {
        //                '글번호': 2,
        //                '제목': "제목2",
        //                '조회수': 13
        //            },
        //            {
        //                '글번호': 3,
        //                '제목': "제목3",
        //                '조회수': 3
        //            },
        //            {
        //                '글번호': 4,
        //                '제목': "제목4",
        //                '조회수': 4
        //            }
        //        ]
        return result
    }
});
const postInfos = [
  {
    postID: 1,
    imageURL: "img_1abcd",
    likes: 123,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 1번의 내용!!",
    comments: [
      { commentID: "cmt_1a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_1b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 2,
    imageURL: "img_2bcde",
    likes: 256,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! 이것은 게시글 2번의 내용!! ",
    comments: [
      { commentID: "cmt_2a", user: "0724.32", context: "hi" },
      { commentID: "cmt_2b", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2c", user: "0724.32", context: "hi" },
      { commentID: "cmt_2d", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2e", user: "0724.32", context: "hi" },
      { commentID: "cmt_2f", user: "katarinabluu", context: "좋아요~asdfkjwe;oifj;awklsjd;fioaj;sefiojweiojrwekj;kjasd;lfj;ioaqwjorijw;elkjf;asljdf;oiwjeoirj;iowjfklajsdoifjoiawej;ijr;iawje;roijaw;oijer;q;iwjefiojq;wioejroijqwoieroiqwjr;oijqw;eoirjoqiwjr;oij;lksajdfmn.,zmxcnv.,mzxncv;oiwejro;iqwje;orijqw;oiejr;oiqwjer;oiqwjer;oijqw;eorjqw;oie;oiqwjeorjqwoier;oqiwjro" },
      { commentID: "cmt_2g", user: "0724.32", context: "hi" },
      { commentID: "cmt_2h", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2i", user: "0724.32", context: "hi" },
      { commentID: "cmt_2j", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2k", user: "0724.32", context: "hi" },
      { commentID: "cmt_2l", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2m", user: "0724.32", context: "hi" },
      { commentID: "cmt_2n", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2o", user: "0724.32", context: "hi" },
      { commentID: "cmt_2p", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2q", user: "0724.32", context: "hi" },
      { commentID: "cmt_2r", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2s", user: "0724.32", context: "hi" },
      { commentID: "cmt_2t", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2u", user: "0724.32", context: "hi" },
      { commentID: "cmt_2v", user: "katarinabluu", context: "좋아요~" },
      { commentID: "cmt_2w", user: "0724.32", context: "hi" },
      { commentID: "cmt_2x", user: "katarinabluu", context: "좋아요~" },

    ]
  },
  {
    postID: 3,
    imageURL: "img_3cdef",
    likes: 198,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 3번의 내용!!",
    comments: [
      { commentID: "cmt_3a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_3b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 4,
    imageURL: "img_4defg",
    likes: 321,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 4번의 내용!!",
    comments: [
      { commentID: "cmt_4a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_4b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 5,
    imageURL: "img_5efgh",
    likes: 154,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 5번의 내용!!",
    comments: [
      { commentID: "cmt_5a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_5b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 6,
    imageURL: "img_6fghi",
    likes: 276,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 6번의 내용!!",
    comments: [
      { commentID: "cmt_6a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_6b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 7,
    imageURL: "img_7ghij",
    likes: 305,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 7번의 내용!!",
    comments: [
      { commentID: "cmt_7a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_7b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 8,
    imageURL: "img_8hijk",
    likes: 412,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 8번의 내용!!",
    comments: [
      { commentID: "cmt_8a", user: "0724.32", context: "hi" },
      { commentID: "cmt_8b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 9,
    imageURL: "img_9ijkl",
    likes: 234,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 9번의 내용!!",
    comments: [
      { commentID: "cmt_9a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_9b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 10,
    imageURL: "img_10jklm",
    likes: 289,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 10번의 내용!!",
    comments: [
      { commentID: "cmt_10a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_10b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 11,
    imageURL: "img_11lmno",
    likes: 310,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 11번의 내용!!",
    comments: [
      { commentID: "cmt_11a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_11b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 12,
    imageURL: "img_12mnop",
    likes: 370,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 12번의 내용!!",
    comments: [
      { commentID: "cmt_12a", user: "0724.32", context: "hi" },
      { commentID: "cmt_12b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 13,
    imageURL: "img_13nopq",
    likes: 195,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 13번의 내용!!",
    comments: [
      { commentID: "cmt_13a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_13b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 14,
    imageURL: "img_14opqr",
    likes: 280,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 14번의 내용!!",
    comments: [
      { commentID: "cmt_14a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_14b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 15,
    imageURL: "img_15pqrs",
    likes: 150,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 15번의 내용!!",
    comments: [
      { commentID: "cmt_15a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_15b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 16,
    imageURL: "img_16qrst",
    likes: 275,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 16번의 내용!!",
    comments: [
      { commentID: "cmt_16a", user: "0724.32", context: "hi" },
      { commentID: "cmt_16b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 17,
    imageURL: "img_17rstu",
    likes: 390,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 17번의 내용!!",
    comments: [
      { commentID: "cmt_17a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_17b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 18,
    imageURL: "img_18stuv",
    likes: 210,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 18번의 내용!!",
    comments: [
      { commentID: "cmt_18a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_18b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 19,
    imageURL: "img_19tuvw",
    likes: 330,
    isLiked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 19번의 내용!!",
    comments: [
      { commentID: "cmt_19a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_19b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 20,
    imageURL: "img_20uvwx",
    likes: 290,
    isLiked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 20번의 내용!!",
    comments: [
      { commentID: "cmt_20a", user: "0724.32", context: "hi" },
      { commentID: "cmt_20b", user: "katarinabluu", context: "좋아요~" }
    ]
  }
];

module.exports = postInfos
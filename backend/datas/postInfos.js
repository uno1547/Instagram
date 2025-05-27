const postInfos = [
  {
    postID: 1,
    // images: "img_1abcd",
    images: [
      "https://lh5.googleusercontent.com/proxy/L-7hpYqmY-2V_IKWV89REZtjUlfVJU6plm3iyjqd9a7Dwo-Act81XCKZraUa1fv2HLCJfUk5MwY21z1MN6GUoBYmEhEMwqE0nwI2d37SVM3H",
      "https://www.palnews.co.kr/news/photo/201801/92969_25283_5321.jpg",
      "https://cdn.imweb.me/upload/S20210720ef466f4f488bc/8082829da5e97.jpg"
    ],
    likes: 78,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 1번의 내용!!",
    comments: [
      { commentID: "cmt_1a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_1b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 2,
    // images: "img_2bcde",
    images: [
      "https://lh5.googleusercontent.com/proxy/L-7hpYqmY-2V_IKWV89REZtjUlfVJU6plm3iyjqd9a7Dwo-Act81XCKZraUa1fv2HLCJfUk5MwY21z1MN6GUoBYmEhEMwqE0nwI2d37SVM3H",
      "https://www.palnews.co.kr/news/photo/201801/92969_25283_5321.jpg",
      "https://cdn.imweb.me/upload/S20210720ef466f4f488bc/8082829da5e97.jpg"
    ],
    likes: 45,
    liked: false,
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
    images: "img_3cdef",
    likes: 92,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 3번의 내용!!",
    comments: [
      { commentID: "cmt_3a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_3b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 4,
    images: "img_4defg",
    likes: 12,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 4번의 내용!!",
    comments: [
      { commentID: "cmt_4a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_4b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 5,
    images: "img_5efgh",
    likes: 60,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 5번의 내용!!",
    comments: [
      { commentID: "cmt_5a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_5b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 6,
    images: "img_6fghi",
    likes: 23,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 6번의 내용!!",
    comments: [
      { commentID: "cmt_6a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_6b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 7,
    images: [
      "https://lh3.googleusercontent.com/proxy/oWZiKvnRpxt-EiHKIy3nS61JcwnP08GajGA2o3cMh6UzA7-RrLEAoCf3FHUnKETVjwJRR_HBV2AFtFlOo8NUKffm_tEm0jm1rp2jgZUWqx7AEe6u4m8",
      "https://blog.kakaocdn.net/dn/SJwAc/btsoxbcDgFk/Q4qw5GkAP0o0VxlMYjIJ71/img.jpg",
      "https://cdn.imweb.me/upload/S20210720ef466f4f488bc/8082829da5e97.jpg"
    ],
    likes: 89,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 7번의 내용!!",
    comments: [
      { commentID: "cmt_7a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_7b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 8,
    images: "img_8hijk",
    likes: 55,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 8번의 내용!!",
    comments: [
      { commentID: "cmt_8a", user: "0724.32", context: "hi" },
      { commentID: "cmt_8b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 9,
    images: "img_9ijkl",
    likes: 94,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 9번의 내용!!",
    comments: [
      { commentID: "cmt_9a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_9b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 10,
    images: "img_10jklm",
    likes: 67,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 10번의 내용!!",
    comments: [
      { commentID: "cmt_10a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_10b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 11,
    images: "img_11lmno",
    likes: 42,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 11번의 내용!!",
    comments: [
      { commentID: "cmt_11a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_11b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 12,
    images: "img_12mnop",
    likes: 58,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 12번의 내용!!",
    comments: [
      { commentID: "cmt_12a", user: "0724.32", context: "hi" },
      { commentID: "cmt_12b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 13,
    images: "img_13nopq",
    likes: 74,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 13번의 내용!!",
    comments: [
      { commentID: "cmt_13a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_13b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 14,
    images: "img_14opqr",
    likes: 39,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 14번의 내용!!",
    comments: [
      { commentID: "cmt_14a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_14b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 15,
    images: "img_15pqrs",
    likes: 88,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 15번의 내용!!",
    comments: [
      { commentID: "cmt_15a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_15b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 16,
    images: "img_16qrst",
    likes: 61,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 16번의 내용!!",
    comments: [
      { commentID: "cmt_16a", user: "0724.32", context: "hi" },
      { commentID: "cmt_16b", user: "katarinabluu", context: "좋아요~" }
    ]
  },
  {
    postID: 17,
    images: "img_17rstu",
    likes: 35,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 17번의 내용!!",
    comments: [
      { commentID: "cmt_17a", user: "00_woowoo_", context: "hi" },
      { commentID: "cmt_17b", user: "dbdydwns", context: "좋아요~" }
    ]
  },
  {
    postID: 18,
    images: "img_18stuv",
    likes: 90,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 18번의 내용!!",
    comments: [
      { commentID: "cmt_18a", user: "katarinabluu", context: "hi" },
      { commentID: "cmt_18b", user: "0724.32", context: "좋아요~" }
    ]
  },
  {
    postID: 19,
    images: "img_19tuvw",
    likes: 29,
    liked: true,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 19번의 내용!!",
    comments: [
      { commentID: "cmt_19a", user: "dbdydwns", context: "hi" },
      { commentID: "cmt_19b", user: "00_woowoo_", context: "좋아요~" }
    ]
  },
  {
    postID: 20,
    images: "img_20uvwx",
    likes: 84,
    liked: false,
    createdAt : "2024년 3월 28일",
    context : "이것은 게시글 20번의 내용!!",
    comments: [
      { commentID: "cmt_20a", user: "0724.32", context: "hi" },
      { commentID: "cmt_20b", user: "katarinabluu", context: "좋아요~" }
    ]
  }
];

module.exports = postInfos
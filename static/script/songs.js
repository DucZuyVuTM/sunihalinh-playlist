const songs = [
    {
        "title": "Đợi Em Được Không",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/CSY2Y4rvMy0/hqdefault.jpg",
        "video_id": "CSY2Y4rvMy0"
    },
    {
        "title": "Hoa Tuyết Lục Giác",
        "artist": "Suni Hạ Linh, Hà Khiết, Vinida, Hàn Tuyết, Yamy, Chu Dương Thanh",
        "thumbnail": "https://img.youtube.com/vi/V_bBWy_ihJc/hqdefault.jpg",
        "video_id": "V_bBWy_ihJc"
    },
    {
        "title": "Lạc Khách (Castaway)",
        "artist": "Juun D, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/6Ji7QeYXWIU/hqdefault.jpg",
        "video_id": "6Ji7QeYXWIU"
    },
    {
        "title": "Nhé Anh (Cover)",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/i5gYJU1m9us/hqdefault.jpg",
        "video_id": "i5gYJU1m9us"
    },
    {
        "title": "Môi Xinh Làm Dáng",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/6QsQCm8F3eo/hqdefault.jpg",
        "video_id": "6QsQCm8F3eo"
    },
    {
        "title": "Mashup Lời Thú Tội Ngọt Ngào - Ngỡ Như Giấc Mơ",
        "artist": "Suni Hạ Linh, Hoàng Dũng",
        "thumbnail": "https://img.youtube.com/vi/bg5p3jpvfTg/hqdefault.jpg",
        "video_id": "bg5p3jpvfTg"
    },
    {
        "title": "Từ Khung Cửa Sổ Này",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/ZT_7wJnKFG8/hqdefault.jpg",
        "video_id": "ZT_7wJnKFG8"
    },
    {
        "title": "Sự Mập Mờ",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/963FD7bWTpk/hqdefault.jpg",
        "video_id": "963FD7bWTpk"
    },
    {
        "title": "Ngỏ Lời",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/l-puImFD5lc/hqdefault.jpg",
        "video_id": "l-puImFD5lc"
    },
    {
        "title": "Nắng Thủy Tinh",
        "artist": "Avin Lu, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/GC71SKC3kcE/hqdefault.jpg",
        "video_id": "GC71SKC3kcE"
    },
    {
        "title": "Không Sao Mà Em Đây Rồi",
        "artist": "Suni Hạ Linh, Lou Hoàng",
        "thumbnail": "https://img.youtube.com/vi/AiD1a2fFFLw/hqdefault.jpg",
        "video_id": "AiD1a2fFFLw"
    },
    {
        "title": "LK: Thanh Xuân - Đừng Ngại Ngùng (Gala Nhạc Việt 10)",
        "artist": "Erik, Suni Hạ Linh, P336 Band",
        "thumbnail": "https://img.youtube.com/vi/f8H-SrkjpTc/hqdefault.jpg",
        "video_id": "f8H-SrkjpTc"
    },
    {
        "title": "Cảm Nắng",
        "artist": "Suni Hạ Linh, RTee",
        "thumbnail": "https://img.youtube.com/vi/n8jLOMSKYI8/hqdefault.jpg",
        "video_id": "n8jLOMSKYI8"
    },
    {
        "title": "Âm Thầm Bên Em (Cover)",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/chjfLRFzKG8/hqdefault.jpg",
        "video_id": "chjfLRFzKG8"
    },
    {
        "title": "Thích Rồi Đấy",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/9psZYu4aXxs/hqdefault.jpg",
        "video_id": "9psZYu4aXxs"
    },    
    {
        "title": "Hơn Cả Tình Đầu",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/eA-ihDUNjHI/hqdefault.jpg",
        "video_id": "eA-ihDUNjHI"
    },
    {
        "title": "Trạm Sạc Cảm Xúc",
        "artist": "Ngô Kiến Huy, Suni Hạ Linh, Seachains, Hứa Kim Tuyền",
        "thumbnail": "https://img.youtube.com/vi/c71EE_a4AuA/hqdefault.jpg",
        "video_id": "c71EE_a4AuA"
    },
    {
        "title": "Sớm Nay Mùa Xuân",
        "artist": "Suni Hạ Linh, Gin Tuấn Kiệt, P336",
        "thumbnail": "https://img.youtube.com/vi/fSWUdH_2JQw/hqdefault.jpg",
        "video_id": "fSWUdH_2JQw"
    },
    {
        "title": "Selfie My Xmas",
        "artist": "MONSTAR, Suni Hạ Linh, Grey D",
        "thumbnail": "https://img.youtube.com/vi/QAkR2CQORks/hqdefault.jpg",
        "video_id": "QAkR2CQORks"
    },
    {
        "title": "Bứt Phá Từ Hôm Nay",
        "artist": "Suni Hạ Linh, 24k.Right",
        "thumbnail": "https://img.youtube.com/vi/jsayMcx0bis/hqdefault.jpg",
        "video_id": "jsayMcx0bis"
    },
    {
        "title": "Đời Vui Khi Ta Có Nhau",
        "artist": "Suni Hạ Linh, Minh Quân Idol",
        "thumbnail": "https://img.youtube.com/vi/ss0VIOBx4rg/hqdefault.jpg",
        "video_id": "ss0VIOBx4rg"
    },
    {
        "title": "Con Gái Có Quyền Điệu (Version 2)",
        "artist": "Suni Hạ Linh, RTee",
        "thumbnail": "https://img.youtube.com/vi/ME60L07wyxc/hqdefault.jpg",
        "video_id": "ME60L07wyxc"
    },
    {
        "title": "Cảm Ơn Người Đã Rời Xa Tôi",
        "artist": "Phạm Hồng Phước, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/faTrNufu88A/hqdefault.jpg",
        "video_id": "faTrNufu88A"
    },
    {
        "title": "Đừng Về Trễ 2",
        "artist": "Suni Hạ Linh, RTee",
        "thumbnail": "https://img.youtube.com/vi/OqGfXoNLSRw/hqdefault.jpg",
        "video_id": "OqGfXoNLSRw"
    },
    {
        "title": "Mơ Trên Mây",
        "artist": "Mr.T, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/5ykieDQjBH8/hqdefault.jpg",
        "video_id": "5ykieDQjBH8"
    },
    {
        "title": "Tết Ta Về Nhà",
        "artist": "Will (365), Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/wrjFgvjpIYY/hqdefault.jpg",
        "video_id": "wrjFgvjpIYY"
    },
    {
        "title": "Mùa Xuân Trở Về",
        "artist": "MONSTAR, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/7pFjXj-2MXA/hqdefault.jpg",
        "video_id": "7pFjXj-2MXA"
    },
    {
        "title": "Chỉ Cần Là Mình Cùng Nhau (Here We Go)",
        "artist": "Suni Hạ Linh, Kai Đinh, MONSTAR",
        "thumbnail": "https://img.youtube.com/vi/-_8wCdFQfJ4/hqdefault.jpg",
        "video_id": "-_8wCdFQfJ4"
    },
    {
        "title": "Cưới Nha Anh",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/HGx-oLHEej0/hqdefault.jpg",
        "video_id": "HGx-oLHEej0"
    },
    {
        "title": "Chuyến Đi Của Thanh Xuân",
        "artist": "Khắc Hưng, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/hSnLRLM-Xcs/hqdefault.jpg",
        "video_id": "hSnLRLM-Xcs"
    },
    {
        "title": "Thời Học Sinh",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/ltkta3Ilez8/hqdefault.jpg",
        "video_id": "ltkta3Ilez8"
    },
    {
        "title": "Hương Mùa Hè",
        "artist": "Suni Hạ Linh, Hoàng Dũng",
        "thumbnail": "https://img.youtube.com/vi/lyBb01PPWiU/hqdefault.jpg",
        "video_id": "lyBb01PPWiU"
    },
    {
        "title": "Dằm Trong Tim",
        "artist": "Suni Hạ Linh, TDK",
        "thumbnail": "https://img.youtube.com/vi/NtWCW6lQqFs/hqdefault.jpg",
        "video_id": "NtWCW6lQqFs"
    },
    {
        "title": "Vào Hạ",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/lXx-kdlxL48/hqdefault.jpg",
        "video_id": "lXx-kdlxL48"
    },
    {
        "title": "Ngày Tỏ Tình Bạn",
        "artist": "Suni Hạ Linh, Osad",
        "thumbnail": "https://img.youtube.com/vi/oDx6CIa_s30/hqdefault.jpg",
        "video_id": "oDx6CIa_s30"
    },
    {
        "title": "Nói Lời Hiển Nhiên",
        "artist": "Suni Hạ Linh, Dế Choắt, Hoàng Dũng",
        "thumbnail": "https://img.youtube.com/vi/YuK6uilw-ZU/hqdefault.jpg",
        "video_id": "YuK6uilw-ZU"
    },
    {
        "title": "Cứ Chill Thôi",
        "artist": "Chillies, Suni Hạ Linh, Rhymastic",
        "thumbnail": "https://img.youtube.com/vi/LZN4I3K8SC0/hqdefault.jpg",
        "video_id": "LZN4I3K8SC0"
    },
    {
        "title": "Ăn Sáng Nha",
        "artist": "Erik, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/ywWVE59gwvs/hqdefault.jpg",
        "video_id": "ywWVE59gwvs"
    },
    {
        "title": "Em Đã Biết",
        "artist": "Suni Hạ Linh, RTee",
        "thumbnail": "https://img.youtube.com/vi/JmOwX6gHahQ/hqdefault.jpg",
        "video_id": "JmOwX6gHahQ"
    },
    {
        "title": "Chẳng Thể Là Ai Khác",
        "artist": "Juun D, Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/2fipcnYHVvw/hqdefault.jpg",
        "video_id": "2fipcnYHVvw"
    },
    {
        "title": "Chờ Nhau Nhé (Gala Nhạc Việt 10)",
        "artist": "Suni Hạ Linh, Erik",
        "thumbnail": "https://img.youtube.com/vi/ZV8usmwv4AE/hqdefault.jpg",
        "video_id": "ZV8usmwv4AE"
    },
    {
        "title": "Say Yes",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/dwgYlChWX4o/hqdefault.jpg",
        "video_id": "dwgYlChWX4o"
    },
    {
        "title": "Tình Đầu",
        "artist": "Suni Hạ Linh",
        "thumbnail": "https://img.youtube.com/vi/qv0__XZUG5s/hqdefault.jpg",
        "video_id": "qv0__XZUG5s"
    }
];

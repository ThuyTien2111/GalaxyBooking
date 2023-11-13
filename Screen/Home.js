import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ImageSlider } from 'react-native-image-slider-banner';

const moviesData = [
    {
        id: 1,
        title: 'Đất rừng phương nam',
        image: require('./img/film1.webp'),
        rating: 8.4,
        genre: 'K',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["18:00", "19:15", "20:00", "22:00"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["09:30", "10:45", "11:45", "13:45", "15:45", "18:00", "20:00", "22:00"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["11:45", "13:45", "15:45", "18:00", "20:00"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["11:45", "13:45", "16:00", "18:15"]
            },
            {
                dayofweek: "Thứ 6",
                date: "10/11",
                time: ["16:30", "18:30"]
            }
        ],
        content:"Đất Rừng Phương Nam phiên bản điện ảnh được kế thừa và phát triển từ tiểu thuyết cùng tên của nhà văn Đoàn Giỏi. Bộ phim kể về hành trình phiêu lưu của An - một cậu bé chẳng may mất mẹ trên đường đi tìm cha. Cùng với An, khán giả sẽ trải nghiệm sự trù phú của thiên nhiên và nét đẹp văn hoá đặc sắc của vùng đất Nam Kì Lục Tỉnh, sự hào hiệp của những người nông dân bám đất bám rừng và tinh thần yêu nước kháng Pháp đầu thế kỉ 20. Bên cạnh đó, tình cảm gia đình, tình bạn, tình người, tình thầy trò, tình yêu nước là những cung bậc cảm xúc sâu sắc sẽ đọng lại qua mỗi bước chân của An và đồng bạn.",
        actor:["Hồng Ánh", "Hạo Khang", "Tiến Luật", "Hứa Vĩ Văn", "Tuấn Trần", "Trấn Thành"],
        director:"Nguyễn Quang Dũng",
        new:{
            img:require('./img/review-dat-rung-phuong-nam-can-chin-chu-hon-o-phan-sau-4_1697556336198.jpg'),
            link:'https://www.galaxycine.vn/binh-luan-phim/review-dat-rung-phuong-nam-can-chin-chu-hon-o-phan-sau/',
            title:"Đất Rừng Phương Nam: Cần Chỉn Chu Hơn Ở Phần Sau!",   
        }
    },
    {
        id: 2,
        title: 'Quỷ môn quan: Gọi hồn',
        image: require('./img/film2.webp'),
        rating: 9.1,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["18:00"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["12:45"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["09:15", "13:15"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["13:00"]
            }
        ],
        content:"Từ nhỏ,  Hướng Vinh (Giang Diệp Sinh) đã có khả năng nhìn thấy ma quỷ. Bởi vì anh là người sở hữu “đôi mắt âm dương”. Để tránh rắc rối, Hướng Vinh thường vờ như chúng không tồn tại và anh quyết định rời Hong Kong và chuyển tới Canada. Một phần là bởi anh muốn quên đi thời thơ ấu đầy khốn khổ. Một ngày nọ, Hướng Vinh nghe tin người mẹ đang rơi vào hôn mê sau khi tử tự bất thành. Điều này buộc anh phải quay trở về quê nhà Hong Kong. Khi trở lại ngôi nhà cũ, mọi thứ dường như trở nên xa lạ. Nhưng điều đáng sợ nhất là, hàng loạt chuỗi tự sát của hàng xóm cùng sự xuất hiện trở lại của các hồn ma trước mắt Hướng Vinh. Mọi chuyện trở nên tồi tệ ngoài sức tưởng tượng của chàng trai trẻ…",
        actor:["Giang Diệp Sinh", "Bạch Linh", "Đàm Ngọc Anh"],
        director:"Tạ Gia Kỳ",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 3,
        title: 'Năm đêm kinh hoàng',
        image: require('./img/film3.webp'),
        rating: 9.6,
        genre: 'T13',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["21:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["12:45", "15:00", "21:15"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["15:00"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["11:00"]
            },
            {
                dayofweek: "Thứ 6",
                date: "10/11",
                time: ["13:45"]
            }
        ],
        content:"Liệu thể sống sót sau năm đêm? Bộ phim kể về một nhân viên bảo vệ gặp rắc rối khi anh bắt đầu làm việc tại Freddy Fazbear's Pizza. Sau ngày đầu tiên, anh nhận ra rằng ca đêm ở Freddy's không giống như bình thường.",
        actor:[" Josh Hutcherson", "Elizabeth Lail", "Piper Rubio"],
        director:"Emma Tammi",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 4,
        title: 'Âm hồn đô thị',
        image: require('./img/film4.webp'),
        rating: 4.5,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["21:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["12:45", "15:00", "21:15"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["15:00"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["11:00"]
            },
            {
                dayofweek: "Thứ 6",
                date: "10/11",
                time: ["13:45"]
            }
        ],
        content:"Âm Hồn Đô Thị bao gồm 5 câu chuyện kinh dị",
        actor:[" Jang Seung Yeon", "Oh Seung Hee", "Jang Ye Eun"],
        director:"Ahn Sang Hoon",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 5,
        title: 'Những nàng tôm lấp lánh',
        image: require('./img/film5.webp'),
        rating: 8.3,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["21:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["12:45", "15:00", "21:15"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["15:00"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["11:00"]
            },
            {
                dayofweek: "Thứ 6",
                date: "10/11",
                time: ["13:45"]
            }
        ],
        content:"The Shiny Shrimps kể về Matthias Le Goff - một nhà vô địch bơi lội thế giới. Vì những phát ngôn gây sốc mang tính kì thị những người trong cộng đồng LGBT mà anh ta phải chịu một hình phạt được coi là cực hình với anh. Đó là phải huấn luyện đội “Những nàng tôm lấp lánh” để họ có cơ hội tham gia Thế vận hội đồng tính nam. Hành trình ấy diễn ra như thế nào?",
        actor:["Nicolas Gob", "Michaeel Abiteboul", "Alban Linenoir"],
        director:"Maxime Govare",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 6,
        title: 'Người vợ cuối cùng',
        image: require('./img/film6.webp'),
        rating: 8.3,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["18:15", "19:00", "19:45", "20:45", "21:30", "22:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["09:45", "10:30", "11:30", "12:15", "13:00", "14:00", "14:45", "15:30",
                        "16:30", "17:15", "18:15", "19:00", "19:45", "20:45", "21:30", "22:15"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["10:30", "11:30", "12:15", "13:00", "14:00", "14:45", "15:30", "16:30",
                        "17:15", "18:15", "19:00", "19:45", "20:45", "21:30", "22:15"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["10:30", "11:30", "12:30", "13:15", "14:00", "15:00", "15:45", "16:30", 
                        "17:30", "22:15"]
            },
            {
                dayofweek: "Thứ 6",
                date: "10/11",
                time: ["09:45", "11:15", "12:15", "14:45", "17:15", "19:45", "22:15"]
            }
        ],
        content:"Lấy cảm hứng từ tiểu thuyết Hồ Oán Hận, của nhà văn Hồng Thái, Người Vợ Cuối Cùng là một bộ phim tâm lý cổ trang, lấy bối cảnh Việt Nam vào triều Nguyễn. Linh - Người vợ bất đắc dĩ của một viên quan tri huyện, xuất thân là con của một gia đình nông dân nghèo khó, vì không thể hoàn thành nghĩa vụ sinh con nối dõi nên đã chịu sự chèn ép của những người vợ lớn trong gia đình. Sự gặp gỡ tình cờ của cô và người yêu thời thanh mai trúc mã của mình - Nhân đã dẫn đến nhiều câu chuyện bất ngờ xảy ra khiến cuộc sống cô hoàn toàn thay đổi.",
        actor:["Kaity Nguyễn", "Thuận Nguyễn", "Đình Ngọc Diệp", "NSƯT Quang Thắng"],
        director:"Victor Vũ",
        new:{
            img:require('./img/nguoi-vo-cuoi-cung-man-ket-hop-an-tuong-giua-victor-vu---kaity-nguyen-7_1699073701240.jpg'),
            link:'https://www.galaxycine.vn/binh-luan-phim/review-nguoi-vo-cuoi-cung-man-ket-hop-an-tuong-giua-victor-vu---kaity-nguyen/',
            title:"Người Vợ Cuối Cùng: Màn Kết Hợp Ấn Tượng Giữa Victor Vũ - Kaity Nguyễn!",   
        }
    },
    {
        id: 7,
        title: 'Wolfoo Và Hòn Đảo Kỳ Bí',
        image: require('./img/film7.webp'),
        rating: 6.4,
        genre: 'T13',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["19:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["19:00"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["19:15"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["18:30"]
            }
        ],
        content:"Câu chuyện xoanh quanh nhân vật chính là chú sói nhỏ Wolfoo 8 tuổi - một chú bé vui vẻ, tốt bụng và yêu thích sự khám phá. Đồng hành cùng Wolfoo chính là cô em gái Lucy 6 tuổi tinh nghịch, hay làm nũng nhưng vô cùng yêu thương anh trai. Câu chuyện bắt đầu khi hai anh em Wolfoo và Lucy bị hút vào một chiếc dây chuyền và đến với Linh Giới - một thế giới vô cùng kỳ diệu. Tại Linh Giới, một sự cố bất ngờ đã khiến hai anh em bị chia tách. Trong hành trình tìm em gái, Wolfoo đã vô tình bị cuốn vào cuộc đấu tranh khốc liệt chống lại binh đoàn quỷ dữ - đứng đầu là Chúa Quỷ Bane - đang cai trị Đảo Thần Bí. Không chỉ là câu chuyện phiêu lưu thuần túy, bộ phim còn mang trong mình những bài học quý giá về sự sáng tạo, sự can đảm và cả tình yêu thương. Tất cả những điều đó đã tạo nên một bộ phim thỏa mãn sự giải trí nhưng cũng đầy tính giáo dục.",
        actor:["Sony Minh Hiếu", "Đạt Phi", "Như Ý"    ],
        director:"Phan Thị Thơ",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 8,
        title: 'Phong ấn quỷ dữ',
        image: require('./img/film8.webp'),
        rating: 5.0,
        genre: 'T16',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["19:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["19:00"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["19:15"]
            },
            {
                dayofweek: "Thứ 5",
                date: "09/11",
                time: ["18:30"]
            }
        ],
        content:"Sam, một thiếu niên người Mỹ gốc Ấn, đang cố gắng hòa nhập vào môi trường học tập với nhiều sự các khác biệt văn hóa. Khi một con quỷ khát máu trong thần thoại đeo bám người bạn thân thiết của cô, Sam buộc phải đối mặt để đánh bại nó.",
        actor:["Megan Suri", "Neeru Bajwa", "Mohana Krishnan"],
        director:"Bishal Dutta",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 9,
        title: 'Vầng trăng máu',
        image: require('./img/film9.webp'),
        rating: 9.3,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["13:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["13:15"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["15:45"]
            }
        ],
        content:"Bộ phim dựa trên cuốn sách bán chạy và được ca ngợi rộng rãi Killers of the Flower Moon: The Osage Murders and the Birth of the FBI của David Grann. Lấy bối cảnh ở Oklahoma những năm 1920, cuốn sách kể về vụ giết người hàng loạt ở bộ tộc Osage, nơi người dân phát triển kinh tế chủ yếu từ dầu mỏ. Một chuỗi tội ác tàn bạo đã xảy ra, được gọi là Triều đại Khủng bố.",
        actor:["Leonardor DiCaprio", "Robert De Niro", "Lily Gladstone"],
        director:"Martin Scorsese",
        new:{
            img:require('./img/killers-of-the-flower-moon-ung-vien-nang-ki-cho-oscar-2024-10_1698226270242.jpg'),
            link:"https://www.galaxycine.vn/binh-luan-phim/review-killers-of-the-flower-moon-ung-vien-nang-ki-cho-oscar-2024/",
            title:"Killers Of The Flower Moon: Ứng Viên Nặng Kí Cho Oscar 2024?",   
        }
    },
    {
        id: 10,
        title: 'Quỷ ám: Tín đồ',
        image: require('./img/film10.webp'),
        rating: 7.9,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "Hôm nay",
                date: "06/11",
                time: ["13:15"]
            },
            {
                dayofweek: "Thứ 3",
                date: "07/11",
                time: ["13:15"]
            },
            {
                dayofweek: "Thứ 4",
                date: "08/11",
                time: ["15:45"]
            }
        ],
        content:"Kể từ cái chết của người vợ đang mang thai trong trận động đất ở Haiti 12 năm trước, Victor Fielding đã tự mình nuôi nấng con gái của họ là Angela. Nhưng khi Angela và bạn của cô là Katherine biến mất trong rừng, và quay lại trong ba ngày sau mà không nhớ gì về những gì đã xảy ra với họ, nó là nguồn cơn của một chuỗi sự kiện buộc Victor phải đối mặt với cái ác trong nỗi kinh hoàng và tuyệt vọng, tìm kiếm người duy nhất còn sống đã từng chứng kiến ​​bất cứ điều gì giống như vậy trước đây - Chris MacNeil.",
        actor:["Jennifer Nettles", "Ellen Burstyn", "Leslie Odom Jr"    ],
        director:"David Gordon Green",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    
];
const newMoviesData = [
    {
        id: 1,
        title: 'Mỹ Nhân Đạo Chích',
        image: require('./img/film1b.webp'),
        rating: 8.8,
        genre: 'T13',
        showtime: [
            {
                dayofweek: "Thứ 7",
                date: "11/11",
                time: ["13:15"]
            },
            {
                dayofweek: "Chủ nhật",
                date: "12/11",
                time: ["13:15"]
            }
        ],
        content:"Mỹ Nhân Đạo Chích là tác phẩm hài mới nhất của màn ảnh rộng xứ Kim Chi, xoay quanh một phi vụ lừa đảo khó tin của một cặp “mẹ con đạo chích”. Uhm Jung Hwa và Minah lần lượt vào vai mẹ con Ji Hye và Joo Yeong, bộ đôi lừa đảo từng thực hiện nhiều phi vụ thành công, nhưng là… công cốc. Để khép lại sự nghiệp vốn không mấy vẻ vang này, Ji Hye quyết định thực hiện phi vụ trộm số vàng với trị giá lên đến 60 tỷ won. Và kế hoạch của cô chính là… lợi dụng trái tim mong manh mới biết yêu của anh chàng tài phiệt Wan Gyu (Song Sae Byeok). Phi vụ đặc biệt của Ji Hye và Joo Yeong không hề suôn sẻ khi cũng có những kẻ khác đang nhòm ngó số vàng kếch xù này.",
        actor:["Uhm Jung Hwa", "Bang Min Ah", "Song Sae Byeok"    ],
        director:"Lee Seung Joon",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 2,
        title: 'Những Kỷ Nguyên Của Taylor Swift',
        image: require('./img/film2b.webp'),
        rating: 9.6,
        genre: 'T13',
        showtime: [
            {
                dayofweek: "Thứ 7",
                date: "11/11",
                time: ["18:15"]
            },
            {
                dayofweek: "Chủ nhật",
                date: "12/11",
                time: ["18:15"]
            }
        ],
        content:"Hiện tượng văn hóa tiếp tục trên màn ảnh lớn! Đắm chìm trong trải nghiệm xem phim hòa nhạc độc nhất vô nhị với góc nhìn ngoạn mục, đậm chất điện ảnh về chuyến lưu diễn mang tính lịch sử. Khuyến khích khán giả đeo vòng tay tình bạn và mặc trang phục Taylor Swift Eras Tour!",
        actor:["Taylor Swift"    ],
        director:"Sam Wrench",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 3,
        title: 'Ailo: Cuộc Phiêu Lưu Ở Laponie',
        image: require('./img/film3b.webp'),
        rating: 0,
        genre: 'T13',
        showtime: [
            {
                dayofweek: "Thứ 7",
                date: "11/11",
                time: ["22:00"]
            }
        ],
        content:"Aïlo: An Odyssey In Lapland kể câu chuyện về cuộc đấu tranh sinh tồn của một chú tuần lộc hoang dã nhỏ bé, yếu ớt và dễ thương khi đối mặt với những thử thách đầu đời của chú. Đây là một câu chuyện có thật, với những cảnh quay tuyệt vời ở vùng Lapland.",
        actor:["Updating"],
        director:"Guillaume Maidatchevsky",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 4,
        title: 'Biệt Đội Marvels',
        image: require('./img/film4b.webp'),
        rating: 8.1,
        genre: 'T13',
        showtime: [
            {
                dayofweek: "Thứ 7",
                date: "11/11",
                time: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00",
                        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
            },
            {
                dayofweek: "Chủ nhật",
                date: "12/11",
                time: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00",
                        "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"]
            }
        ],
        content:"Carol Danvers bị vướng vào sức mạnh của Kamala Khan và Monica Rambeau, buộc họ phải hợp tác với nhau để cứu vũ trụ. ",
        actor:["Brie Larson", " Samuel L. Jackson", "Zawe Ashton", " Park Seo Joon"    ],
        director:"Nia DaCosta",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 5,
        title: 'Yêu Lại Vợ Ngầu',
        image: require('./img/film5b.webp'),
        rating: 7.0,
        genre: 'T16',
        showtime: [
            {
                dayofweek: "Thứ 7",
                date: "11/11",
                time: ["18:15"]
            },
            {
                dayofweek: "Chủ nhật",
                date: "12/11",
                time: ["10:15", "14:15", "20:30", "22:45"]
            }
        ],
        content:"Cặp vợ chồng trẻ No Jung Yeol (Kang Ha-neul) và Hong Na Ra (Jung So-min) từ cuộc sống hôn nhân màu hồng dần “hiện nguyên hình” trở thành cái gai trong mắt đối phương với vô vàn thói hư, tật xấu. Không thể đi đến tiếng nói chung, Jung Yeol và Na Ra quyết định ra toà ly dị. Tuy nhiên, họ phải chờ 30 ngày cho đến khi mọi thủ tục chính thức được hoàn tất.",
        actor:["Kang Ha Neul", " Jung So Min"],
        director:"Nam Dae-Joong",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 6,
        title: 'Đường Cùng',
        image: require('./img/film6b.webp'),
        rating: 0,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "",
                date: "",
                time: []
            }
        ],
        content:"Để thoát khỏi cuộc sống địa ngục, cậu thiếu niên 17 tuổi lầm tưởng con đường tội ác chính là thiên đường nơi cậu thuộc về. Giữa chốn tối tăm nhất của cuộc đời, hy vọng le lói và những tội ác không thể quay đầu cứ bám chặt lấy cậu",
        actor:["Hong Xa Bin", " Song joong Ki", "Kim Hyoung Seo"    ],
        director:"Kim Chang Hoon",
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 7,
        title: 'Lễ Tạ Ơn Kinh Hoàng',
        image: require('./img/film7b.webp'),
        rating: 5.5,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "",
                date: "",
                time: []
            }
        ],
        content:'updating',
        actor:["updating"],
        director:'updating',
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    },
    {
        id: 8,
        title: 'Đấu Trường Sinh Tử: Khúc Hát Của Chim Ca Và Rắn Độc',
        image: require('./img/film8b.webp'),
        rating: 6.6,
        genre: 'T18',
        showtime: [
            {
                dayofweek: "",
                date: "",
                time: []
            }
        ],
        content:'updating',
        actor:["updating"],
        director:'updating',
        new:{
            img:require('./img/updating.jpg'),
            link:'updating',
            title:'Hiện tại phim chưa có tin tức',   
        }
    }
];

const Home = ({navigation}) => {
    const [isShowingNow, setIsShowingNow] = useState(true);
    var [moviesToShow, setMoviesToShow] = useState(moviesData.slice(0, 6)); // Hiển thị 6 phim ban đầu

    const toggleMovies = () => {
        if (isShowingNow == true) {
            setMoviesToShow(moviesData);
        } else {
            setMoviesToShow(newMoviesData);
        }
    };
    const changeToNewMovies = () => {
        setIsShowingNow(false);
        setMoviesToShow(newMoviesData.slice(0, 6));
    };
    const changeToShowingMovies = () => {
        setIsShowingNow(true);
        setMoviesToShow(moviesData.slice(0, 6));
    };

    const bannerImages = [
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F27%2Fglw-digital-2048x682_1698380463673.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F27%2Ftaylor-2048_1698380586771.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F25%2Fnvcc-2048_1698200775270.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F27%2Fqmq-2048_1698382401475.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F17%2Fdatrungpn-2-1697433653458_1697510491383.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F9%2Fdrpn-2048-x-682-px_1696827066898.jpg&w=3840&q=75" },
        { img: "https://www.galaxycine.vn/_next/image/?url=https%3A%2F%2Fcdn.galaxycine.vn%2Fmedia%2F2023%2F10%2F17%2Fvnpay-102023-4_1697533170464.jpg&w=3840&q=75" },
    ]

    return (
        <View style={styles.container}>
            <View></View>

            <ImageSlider
                data={bannerImages}
                autoPlay={true}
                caroselImageContainerStyle={{ marginTop: -40, height: 250, marginBottom: -5 }}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changeToShowingMovies()}
                >
                    <Text style={isShowingNow ? styles.activeText : styles.buttonText}>Đang chiếu</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => changeToNewMovies()}
                >
                    <Text style={!isShowingNow ? styles.activeText : styles.buttonText}>Sắp chiếu</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={moviesToShow}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <View style={styles.movieContainer}>
                        <TouchableOpacity onPress={()=>{navigation.navigate("ChoseShowtime", {item})}}>
                            <Image source={item.image} style={styles.movieImage} />
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                            <View style={styles.ratingContain}>
                                <Text style={styles.ratingText}> {item.rating} ⭐</Text>
                            </View>

                            <View style={styles.typeContain}>
                                <Text style={styles.typeText}>{item.genre}</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                )}
            />

            <TouchableOpacity style={styles.loadMoreButton} onPress={toggleMovies}>
                <Text style={styles.loadMoreText}>Xem tiếp </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
        marginTop: -20,
    },
    button: {
        padding: 5,
        backgroundColor: 'white',
    },
    buttonText: {
        color: 'gray',
    },
    activeText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1e40a5',
    },
    movieContainer: {
        flex: 1,
        margin: 10,
        backgroundColor: 'white',
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    movieImage: {
        width: '100%',
        height: 200,
    },
    movieText: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    loadMoreButton: {
        marginTop: 10,
        borderColor: '#FFA500',
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginHorizontal: 20
    },
    loadMoreText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#FFA500',
    },
    typeContain: {
        marginLeft: 5,
        position: 'absolute',
        justifyContent: 'flex-end',
        marginTop: 5,
        borderRadius: 5,
        backgroundColor: '#FFA500',
        width: 40,
        paddingVertical: 4,
    },
    typeText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    ratingContain: {
        marginLeft: 75,
        position: 'absolute',
        justifyContent: 'flex-end',
        marginTop: 165,
        borderRadius: 5,
        backgroundColor: '#00000068',
        width: 60,
        paddingVertical: 4,
    },
    ratingText: {
        textAlign: 'right',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default Home;

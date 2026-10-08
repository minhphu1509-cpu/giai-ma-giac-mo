// ============================================================
//  DỮ LIỆU GIẢI MÃ GIẤC MƠ — văn hóa dân gian Việt Nam
//  Tổng hợp từ sổ mơ dân gian, ca dao tục ngữ và kinh nghiệm
//  dân gian lưu truyền. Mang tính tham khảo, chiêm nghiệm.
// ============================================================

export type Omen = "tot" | "xau" | "trung-tinh";

export interface DreamEntry {
  slug: string;
  title: string;
  keywords: string[];
  category: string; // category id
  omen: Omen;
  summary: string;
  meaning: string;
  advice: string;
  numbers: number[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "dong-vat",
    name: "Động vật",
    icon: "🐉",
    description:
      "Rắn, rồng, hổ, chim, cá... — mỗi loài vật trong mơ đều mang một điềm báo riêng theo quan niệm dân gian.",
  },
  {
    id: "thien-nhien",
    name: "Thiên nhiên",
    icon: "🌧️",
    description:
      "Mưa, bão, lửa, trăng sao, hoa lá — thiên nhiên trong mơ phản chiếu tâm trạng và vận khí của bạn.",
  },
  {
    id: "con-nguoi",
    name: "Con người",
    icon: "👪",
    description:
      "Người thân, em bé, đám cưới, đám tang... — những giấc mơ về con người thường gắn với tình cảm và gia đạo.",
  },
  {
    id: "su-kien",
    name: "Sự kiện & Hành động",
    icon: "✨",
    description:
      "Bay lượn, té ngã, thi cử, trúng số... — hành động trong mơ hé lộ khát vọng và nỗi lo thầm kín.",
  },
  {
    id: "do-vat",
    name: "Đồ vật",
    icon: "💰",
    description:
      "Tiền bạc, vàng, nhà cửa, xe cộ... — đồ vật xuất hiện trong mơ thường liên quan đến tài lộc và sự nghiệp.",
  },
];

export const OMEN_LABEL: Record<Omen, { label: string; color: string; bg: string }> = {
  tot: { label: "Điềm lành", color: "text-emerald-700", bg: "bg-emerald-100" },
  xau: { label: "Điềm dữ", color: "text-rose-700", bg: "bg-rose-100" },
  "trung-tinh": { label: "Trung tính", color: "text-amber-700", bg: "bg-amber-100" },
};

export const DREAMS: DreamEntry[] = [
  // ---------------- ĐỘNG VẬT ----------------
  {
    slug: "mo-thay-ran",
    title: "Mơ thấy rắn",
    keywords: ["rắn", "ran", "rắn cắn", "rắn hổ mang", "rắn bò vào nhà"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Rắn là biểu tượng của trí tuệ và sự tái sinh, nhưng cũng cảnh báo kẻ tiểu nhân rình rập.",
    meaning:
      "Trong văn hóa dân gian, rắn vừa là linh vật khôn ngoan vừa là điềm cảnh báo. Mơ thấy rắn hiền lành, rắn vàng hoặc rắn bò vào nhà thường là điềm lành về tài lộc sắp đến. Ngược lại, bị rắn cắn, rắn hổ mang phùng mang hay rắn đen báo hiệu có kẻ ganh ghét, tiểu nhân hãm hại, cần cẩn trọng trong các mối quan hệ làm ăn. Rắn lột xác còn tượng trưng cho sự thay đổi, tái sinh trong cuộc đời bạn.",
    advice:
      "Nếu mơ rắn dữ, hãy cẩn thận với người mới quen và hợp đồng quan trọng trong thời gian tới. Mơ rắn lành thì cứ tự tin đón nhận cơ hội mới.",
    numbers: [32, 42, 72],
  },
  {
    slug: "mo-thay-ran-can",
    title: "Mơ bị rắn cắn",
    keywords: ["rắn cắn", "ran can", "bị cắn", "rắn độc cắn"],
    category: "dong-vat",
    omen: "xau",
    summary: "Điềm cảnh báo có kẻ xấu hãm hại hoặc sức khỏe đang có vấn đề cần lưu tâm.",
    meaning:
      "Dân gian quan niệm bị rắn cắn trong mơ là lời nhắc phải đề phòng tiểu nhân đâm sau lưng, đặc biệt trong công việc và tiền bạc. Nếu vết cắn chảy máu, có thể bạn đang hao tổn sức lực vì lo toan quá nhiều. Tuy nhiên, một số vùng lại cho rằng rắn cắn là 'độc trị độc' — sau cơn bĩ cực sẽ tới hồi thái lai.",
    advice:
      "Giữ kín kế hoạch quan trọng, tránh tin người quá vội. Đồng thời nên đi kiểm tra sức khỏe nếu cơ thể có dấu hiệu mệt mỏi kéo dài.",
    numbers: [14, 59, 95],
  },
  {
    slug: "mo-thay-rong",
    title: "Mơ thấy rồng",
    keywords: ["rồng", "rong", "rồng bay", "rồng vàng", "long"],
    category: "dong-vat",
    omen: "tot",
    summary: "Đại cát! Rồng là linh vật tối cao, báo hiệu quyền lực, thăng tiến và vận may lớn.",
    meaning:
      "Rồng trong văn hóa Việt là biểu tượng của vương quyền, mưa thuận gió hòa và sự thịnh vượng. Mơ thấy rồng bay lượn, rồng vàng hay cưỡi rồng là điềm đại phát: công danh thăng tiến, làm ăn phát đạt, gia đình có tin vui lớn như đỗ đạt, thăng quan. Người kinh doanh mơ thấy rồng thường gặp được quý nhân phù trợ, việc lớn hóa nhỏ.",
    advice:
      "Đây là thời điểm tốt để mạnh dạn thực hiện dự định lớn đã ấp ủ lâu nay. Hãy nắm bắt cơ hội khi nó đến.",
    numbers: [10, 50, 90],
  },
  {
    slug: "mo-thay-ho",
    title: "Mơ thấy hổ",
    keywords: ["hổ", "ho", "cọp", "ông hổ", "hổ vồ"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Hổ tượng trưng cho uy quyền và sức mạnh, nhưng cũng nhắc bạn đề phòng đối thủ mạnh.",
    meaning:
      "Mơ thấy hổ hiền lành, hổ nằm yên là điềm tốt về quyền lực và địa vị — bạn sắp được trọng dụng. Nhưng nếu hổ gầm gừ, vồ lấy bạn thì đó là lời cảnh báo về đối thủ cạnh tranh gay gắt hoặc cấp trên khó tính. Dân gian còn gọi hổ là 'ông Hổ', loài vật linh thiêng canh giữ rừng núi, nên giấc mơ này cũng mang ý nghĩa được che chở.",
    advice:
      "Hãy phát huy bản lĩnh nhưng tránh đối đầu trực diện với người có thế lực hơn mình lúc này.",
    numbers: [6, 60, 46],
  },
  {
    slug: "mo-thay-meo",
    title: "Mơ thấy mèo",
    keywords: ["mèo", "meo", "mèo đen", "mèo trắng", "mèo con"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Mèo trắng, mèo vàng là điềm lành; mèo đen thường gắn với điềm gở theo quan niệm dân gian.",
    meaning:
      "Mèo trong mơ phản ánh sự độc lập và trực giác của bạn. Mơ thấy mèo con, mèo trắng hay mèo vàng đùa giỡn là điềm vui về tình cảm, gia đình êm ấm. Mèo đen theo dân gian thường bị xem là điềm xui, báo hiệu chuyện thị phi hoặc kẻ gian dối quanh bạn. Mèo cào cấu thì nên cẩn trọng lời ăn tiếng nói kẻo vướng tranh cãi.",
    advice:
      "Tin vào trực giác của mình trong những quyết định sắp tới. Nếu mơ mèo đen, hãy kín đáo hơn trong chuyện riêng tư.",
    numbers: [18, 58, 98],
  },
  {
    slug: "mo-thay-cho",
    title: "Mơ thấy chó",
    keywords: ["chó", "cho", "chó cắn", "chó sủa", "cún", "chó con"],
    category: "dong-vat",
    omen: "tot",
    summary: "Chó là biểu tượng của lòng trung thành — điềm báo có quý nhân, bạn tốt giúp đỡ.",
    meaning:
      "Dân gian coi chó là loài vật trung thành, giữ nhà giữ của. Mơ thấy chó vẫy đuôi, chó con đáng yêu là điềm lành: bạn bè tốt sẽ xuất hiện giúp đỡ lúc khó khăn, tình bạn thêm bền chặt. Chó sủa vang báo tin vui từ xa tới. Chỉ khi chó dữ cắn bạn mới là điềm cần đề phòng kẻ phản bội hoặc bạn bè hiểu lầm.",
    advice:
      "Hãy trân trọng những người bạn chân thành bên cạnh. Đây cũng là lúc tốt để hàn gắn mối quan hệ rạn nứt.",
    numbers: [29, 59, 95],
  },
  {
    slug: "mo-thay-chim",
    title: "Mơ thấy chim bay",
    keywords: ["chim", "chim bay", "chim đậu", "chim én", "đàn chim"],
    category: "dong-vat",
    omen: "tot",
    summary: "Chim bay lượn là biểu tượng của tự do và tin vui sắp bay đến.",
    meaning:
      "Mơ thấy chim tung cánh bay cao báo hiệu khát vọng tự do của bạn sắp thành hiện thực, công việc hanh thông, có tin vui từ phương xa. Chim én bay về còn là điềm báo mùa xuân, hỷ sự trong nhà. Chim đậu trên vai hay bay vào nhà là lộc trời cho, gia đình sắp đón tin mừng.",
    advice:
      "Hãy mạnh dạn theo đuổi ước mơ, đừng để nỗi sợ kìm hãm đôi cánh của bạn.",
    numbers: [56, 66, 76],
  },
  {
    slug: "mo-thay-qua",
    title: "Mơ thấy quạ",
    keywords: ["quạ", "qua", "quạ kêu", "quạ đen"],
    category: "dong-vat",
    omen: "xau",
    summary: "Quạ kêu trong dân gian thường gắn với tin buồn — nên cẩn trọng và giữ tâm an.",
    meaning:
      "Từ xưa, tiếng quạ kêu đã được xem là điềm báo chẳng lành, có thể liên quan đến tin buồn trong họ hàng hoặc chuyện không may bất ngờ. Mơ thấy đàn quạ bay lượn trên đầu nhắc bạn nên quan tâm hơn đến sức khỏe người thân lớn tuổi và tránh đi xa, làm việc mạo hiểm trong thời gian ngắn tới.",
    advice:
      "Đừng quá lo lắng — giấc mơ là lời nhắc để bạn sống cẩn trọng và quan tâm gia đình hơn, không phải án phạt định sẵn.",
    numbers: [4, 44],
  },
  {
    slug: "mo-thay-ca",
    title: "Mơ thấy cá",
    keywords: ["cá", "ca", "cá chép", "bắt cá", "cá vàng", "đàn cá"],
    category: "dong-vat",
    omen: "tot",
    summary: "Cá tượng trưng cho tài lộc dồi dào — 'cá' đồng âm với 'dư' nghĩa là dư dả.",
    meaning:
      "Trong văn hóa Á Đông, cá là biểu tượng của sự sung túc, dư dả quanh năm. Mơ thấy bắt được cá to, cá chép vượt vũ môn báo hiệu tài lộc hanh thông, thi cử đỗ đạt, sự nghiệp thăng tiến. Cá bơi lội tung tăng trong nước trong là điềm gia đình hòa thuận, tiền bạc rủng rỉnh. Cá chép hóa rồng còn là giấc mơ đại cát của sĩ tử.",
    advice:
      "Hãy chăm chỉ và kiên trì như người câu cá — thành quả xứng đáng đang đến gần.",
    numbers: [79, 99],
  },
  {
    slug: "mo-thay-ech",
    title: "Mơ thấy ếch",
    keywords: ["ếch", "ech", "nhái", "cóc", "ếch kêu"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Ếch gắn với mưa thuận gió hòa; cóc trong nhà theo dân gian là giữ của.",
    meaning:
      "Ếch kêu báo mưa, mà mưa thuận thì mùa màng bội thu — vì vậy mơ thấy ếch thường là điềm trung tính thiên về tốt cho người làm ăn nông nghiệp, buôn bán. Cóc nhảy vào nhà được dân gian xem là điềm giữ tiền của, tài lộc không thất thoát. Tuy nhiên, mơ thấy ếch chết hay dẫm phải ếch thì nên cẩn thận chuyện tiền nong nhỏ nhặt.",
    advice:
      "Đây là thời điểm thuận lợi cho những kế hoạch cần sự kiên nhẫn, 'mưa dầm thấm lâu'.",
    numbers: [9, 49, 89],
  },
  {
    slug: "mo-thay-chuot",
    title: "Mơ thấy chuột",
    keywords: ["chuột", "chuot", "chuột cắn", "đuổi chuột", "ổ chuột"],
    category: "dong-vat",
    omen: "xau",
    summary: "Chuột trong mơ thường báo hao tài tốn của hoặc kẻ gian lén lút phá hoại.",
    meaning:
      "Dân gian xem chuột là loài phá hoại mùa màng, kho lẫm. Mơ thấy chuột chạy trong nhà, chuột cắn phá đồ đạc là điềm hao tài, có kẻ lén lút gây thiệt hại cho bạn — có thể là trộm cắp hoặc đối thủ chơi xấu. Đuổi được chuột đi là điềm tốt: bạn sẽ tống khứ được rắc rối. Mơ thấy mèo bắt chuột thì yên tâm, quý nhân sẽ giúp bạn dẹp yên kẻ xấu.",
    advice:
      "Kiểm tra lại cửa nẻo, tài sản và các khoản cho vay. Cẩn thận với người hay nịnh bợ xung quanh.",
    numbers: [2, 20, 55],
  },
  {
    slug: "mo-thay-ong",
    title: "Mơ thấy ong",
    keywords: ["ong", "ong mật", "ong đốt", "tổ ong", "ong vò vẽ"],
    category: "dong-vat",
    omen: "tot",
    summary: "Ong chăm chỉ là biểu tượng của lao động gặt hái ngọt ngào — điềm báo thành quả xứng đáng.",
    meaning:
      "Mơ thấy ong bay lượn hút mật, tổ ong đầy mật là điềm lành cho người chăm chỉ: công sức bỏ ra sẽ được đền đáp xứng đáng, làm ăn có lãi. Ong bay vào nhà báo tin vui về tiền bạc. Chỉ khi bị ong đốt mới cần lưu ý: có thể bạn đang 'đụng chạm' đến lợi ích của ai đó, nên khéo léo hơn trong ứng xử.",
    advice:
      "Tiếp tục kiên trì với công việc hiện tại. Ngọt ngào đang ở phía trước, đừng bỏ cuộc giữa chừng.",
    numbers: [16, 56, 96],
  },
  {
    slug: "mo-thay-buom",
    title: "Mơ thấy bướm",
    keywords: ["bướm", "buom", "bướm bay", "bướm đậu", "hồ điệp"],
    category: "dong-vat",
    omen: "tot",
    summary: "Bướm là hiện thân của sự biến hóa xinh đẹp — tình duyên và cuộc sống sắp nở hoa.",
    meaning:
      "Từ con sâu hóa bướm xinh đẹp, giấc mơ thấy bướm báo hiệu giai đoạn chuyển mình tích cực: người độc thân sắp gặp ý trung nhân, người có đôi thì tình cảm thêm mặn nồng. Bướm đậu trên vai hay bay quanh nhà là điềm hỷ, gia đình có chuyện vui. Bướm nhiều màu sắc còn tượng trưng cho cuộc sống sắp thêm phần rực rỡ.",
    advice:
      "Hãy mở lòng đón nhận thay đổi. Vẻ đẹp mới của cuộc đời bạn đang chớm nở như cánh bướm.",
    numbers: [26, 62],
  },
  {
    slug: "mo-thay-trau",
    title: "Mơ thấy trâu",
    keywords: ["trâu", "trau", "trâu cày", "nghé", "bò"],
    category: "dong-vat",
    omen: "tot",
    summary: "Trâu là bạn của nhà nông — điềm báo cần cù sẽ được đền đáp, mùa màng bội thu.",
    meaning:
      "Con trâu gắn liền với nền văn minh lúa nước Việt Nam, tượng trưng cho sự siêng năng, bền bỉ. Mơ thấy trâu khỏe mạnh cày ruộng là điềm tốt: công việc ổn định, làm ăn chắc chắn, 'có công mài sắt có ngày nên kim'. Trâu đẻ nghé báo gia đình thêm người thêm của. Chỉ khi trâu húc nhau hay trâu điên mới cần đề phòng tranh chấp.",
    advice:
      "Cứ bền bỉ với con đường đã chọn. Thành công của bạn đến từ sự kiên trì chứ không phải may rủi.",
    numbers: [3, 63, 86],
  },
  {
    slug: "mo-thay-ngua",
    title: "Mơ thấy ngựa",
    keywords: ["ngựa", "ngua", "cưỡi ngựa", "ngựa phi", "mã"],
    category: "dong-vat",
    omen: "tot",
    summary: "Ngựa phi nước đại là biểu tượng của thành công thần tốc — 'mã đáo thành công'.",
    meaning:
      "Câu chúc 'mã đáo thành công' đã nói lên tất cả: mơ thấy cưỡi ngựa phi nhanh, ngựa đẹp khỏe mạnh là điềm đại cát về sự nghiệp — thăng quan tiến chức, kinh doanh thuận buồm xuôi gió. Ngựa trắng còn tượng trưng cho quý nhân phù trợ. Người đi xa mơ thấy ngựa là điềm về nhà bình an, mọi việc hanh thông.",
    advice:
      "Đây là lúc để tăng tốc! Mạnh dạn đầu tư công sức vào mục tiêu lớn nhất của bạn.",
    numbers: [12, 52, 72],
  },
  {
    slug: "mo-thay-heo",
    title: "Mơ thấy heo",
    keywords: ["heo", "lợn", "lon", "heo con", "heo ỉn", "đàn heo"],
    category: "dong-vat",
    omen: "tot",
    summary: "Heo béo tốt tượng trưng cho sự no đủ, phát tài phát lộc trong dân gian.",
    meaning:
      "Heo trong văn hóa dân gian là biểu tượng của sự sung túc, đủ đầy — 'lợn' còn gắn với hình ảnh no ấm ngày Tết. Mơ thấy đàn heo béo tốt, heo con đáng yêu là điềm tài lộc dồi dào, làm ăn có lãi, gia đình êm ấm no đủ. Heo chạy vào nhà là lộc trời cho. Người buôn bán mơ thấy heo thì yên tâm 'buôn may bán đắt'.",
    advice:
      "Hãy biết đủ và chia sẻ may mắn với người xung quanh — phúc đức sẽ càng thêm dày.",
    numbers: [76, 86],
  },
  {
    slug: "mo-thay-ga",
    title: "Mơ thấy gà",
    keywords: ["gà", "ga", "gà gáy", "gà mái", "gà con", "gà trống"],
    category: "dong-vat",
    omen: "tot",
    summary: "Tiếng gà gáy sáng xua tan đêm tối — điềm báo tin vui và khởi đầu mới tốt lành.",
    meaning:
      "Gà trống gáy sáng trong dân gian tượng trưng cho sự thức tỉnh, xua đuổi tà ma và đón bình minh. Mơ thấy gà gáy vang là điềm có tin vui, oan khuất được giải tỏa. Gà mái ấp trứng, dẫn đàn con báo gia đình sum vầy, con cháu đề huề. Gà trống oai vệ còn là điềm thăng tiến cho người làm quan chức.",
    advice:
      "Sau đêm dài tăm tối, bình minh đang lên. Hãy lạc quan vì tin tốt sắp gõ cửa.",
    numbers: [7, 47, 87],
  },
  {
    slug: "mo-thay-khi",
    title: "Mơ thấy khỉ",
    keywords: ["khỉ", "khi", "vượn", "tôn ngộ không", "khỉ leo cây"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Khỉ lanh lợi tượng trưng cho trí thông minh, nhưng cũng nhắc đề phòng kẻ láu cá.",
    meaning:
      "Khỉ là loài vật thông minh, nhanh nhẹn. Mơ thấy khỉ vui đùa là điềm bạn sắp gặp chuyện vui, có người lém lỉnh mang tiếng cười đến. Tuy nhiên, khỉ cũng tượng trưng cho sự láu cá — giấc mơ nhắc bạn đề phòng kẻ 'khôn lỏi' lợi dụng mình trong làm ăn. Khỉ leo cao báo hiệu bạn cần linh hoạt hơn để vượt qua thử thách.",
    advice:
      "Dùng trí thông minh để giải quyết vấn đề, nhưng đừng quá tin vào những lời đường mật.",
    numbers: [23, 43, 63],
  },
  {
    slug: "mo-thay-voi",
    title: "Mơ thấy voi",
    keywords: ["voi", "voi trắng", "cưỡi voi", "ngà voi"],
    category: "dong-vat",
    omen: "tot",
    summary: "Voi là linh vật của sức mạnh và trí tuệ — điềm được quý nhân nâng đỡ, việc lớn thành công.",
    meaning:
      "Voi trắng trong văn hóa phương Đông là điềm đại cát, tượng trưng cho bậc thánh nhân. Mơ thấy voi khỏe mạnh, cưỡi voi là điềm quyền lực vững chắc, được người có thế lực giúp đỡ, việc khó hóa dễ. Ngà voi còn tượng trưng cho tài sản quý giá sắp đến tay. Gia đình mơ thấy voi là điềm con cháu hiếu thảo, nề nếp.",
    advice:
      "Hãy vững vàng như voi — không vội vàng, nhưng mỗi bước đi đều chắc chắn và đầy sức mạnh.",
    numbers: [13, 53, 73],
  },
  {
    slug: "mo-thay-rua",
    title: "Mơ thấy rùa",
    keywords: ["rùa", "rua", "rùa vàng", "rùa bò", "cụ rùa"],
    category: "dong-vat",
    omen: "tot",
    summary: "Rùa là biểu tượng của trường thọ và sự bền vững — điềm bình an, sống lâu.",
    meaning:
      "Trong tứ linh Long - Lân - Quy - Phụng, rùa (Quy) tượng trưng cho sự trường tồn, vững chãi. Mơ thấy rùa là điềm lành về sức khỏe và tuổi thọ, gia đình bình an. Rùa vàng còn báo hiệu tài lộc bền vững, không phải của 'ăn xổi'. Người lớn tuổi mơ thấy rùa là điềm sống lâu trăm tuổi, con cháu đầy đàn.",
    advice:
      "'Chậm mà chắc' — đừng sốt ruột so sánh mình với người khác, con đường bền vững mới là con đường của bạn.",
    numbers: [27, 67, 87],
  },
  {
    slug: "mo-thay-ca-sau",
    title: "Mơ thấy cá sấu",
    keywords: ["cá sấu", "ca sau", "sấu", "bị cá sấu cắn"],
    category: "dong-vat",
    omen: "xau",
    summary: "Cá sấu rình mồi dưới nước — điềm cảnh báo kẻ thù nguy hiểm đang ẩn nấp.",
    meaning:
      "Cá sấu là loài săn mồi đáng sợ, tượng trưng cho mối nguy hiểm tiềm ẩn. Mơ thấy cá sấu báo hiệu có kẻ thù hoặc đối thủ đang âm thầm theo dõi, chờ cơ hội hãm hại bạn — đặc biệt nguy hiểm vì chúng 'ẩn mình dưới nước', tức là bạn khó nhận ra. Thoát khỏi cá sấu trong mơ là điềm tốt: bạn đủ khôn ngoan để tránh bẫy.",
    advice:
      "Hãy quan sát kỹ những người tỏ ra quá tốt với mình một cách bất thường. Cẩn tắc vô ưu.",
    numbers: [24, 64],
  },
  {
    slug: "mo-thay-tho",
    title: "Mơ thấy thỏ",
    keywords: ["thỏ", "tho", "thỏ trắng", "thỏ con", "thỏ ngọc"],
    category: "dong-vat",
    omen: "tot",
    summary: "Thỏ trắng hiền lành mang điềm may về tình duyên và sự trong sáng.",
    meaning:
      "Thỏ trong văn hóa dân gian gắn với chị Hằng, chú Cuội — biểu tượng của sự trong sáng, hiền lành. Mơ thấy thỏ trắng là điềm tình duyên thuận lợi, người độc thân sắp gặp người tâm đầu ý hợp. Thỏ con còn báo tin vui về con cái. Thỏ chạy nhanh nhắc bạn hãy nhanh nhẹn nắm bắt cơ hội tình cảm kẻo lỡ.",
    advice:
      "Hãy dịu dàng và chân thành trong tình cảm — đó chính là 'vũ khí' thu hút may mắn của bạn.",
    numbers: [8, 48, 88],
  },
  {
    slug: "mo-thay-de",
    title: "Mơ thấy dê",
    keywords: ["dê", "de", "dê con", "cừu", "đàn dê"],
    category: "dong-vat",
    omen: "tot",
    summary: "Dê hiền lành, sinh sôi nảy nở — điềm gia đình sung túc, con cháu đề huề.",
    meaning:
      "Dê là loài vật hiền lành, dễ nuôi, sinh sản tốt nên trong dân gian tượng trưng cho sự sung túc, con đàn cháu đống. Mơ thấy đàn dê là điềm gia đình hòa thuận, làm ăn khấm khá. Dê trắng còn báo hiệu tâm hồn thanh thản, mọi muộn phiền sẽ qua. Người hiếm muộn mơ thấy dê con là điềm sắp có tin vui.",
    advice:
      "Hãy vun vén tổ ấm — hạnh phúc gia đình chính là nền tảng cho mọi thành công khác.",
    numbers: [15, 35, 75],
  },
  {
    slug: "mo-thay-nhen",
    title: "Mơ thấy nhện",
    keywords: ["nhện", "nhen", "mạng nhện", "nhện giăng tơ"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Nhện cần mẫn giăng tơ — điềm báo sự kiên trì sẽ dệt nên thành quả.",
    meaning:
      "Nhện giăng tơ là hình ảnh của sự kiên nhẫn và khéo léo. Mơ thấy nhện đang giăng mạng báo hiệu công việc bạn đang làm sẽ dần thành hình, chỉ cần kiên trì. Nhện sa trước mặt theo dân gian là điềm có khách quý đến nhà. Tuy nhiên, bị nhện cắn hay mạng nhện vướng víu thì nên gỡ rối những mối quan hệ rắc rối đang vướng mắc.",
    advice:
      "Đừng nản khi thành quả chưa đến ngay — như nhện giăng tơ, mỗi ngày một chút sẽ thành mạng lưới vững chắc.",
    numbers: [33, 73],
  },
  {
    slug: "mo-thay-cu-meo",
    title: "Mơ thấy cú mèo",
    keywords: ["cú mèo", "cu meo", "chim cú", "cú kêu"],
    category: "dong-vat",
    omen: "xau",
    summary: "Tiếng cú kêu đêm trong dân gian bị xem là điềm gở — cần cẩn trọng và giữ sức khỏe.",
    meaning:
      "Từ xưa, người Việt e ngại tiếng cú mèo kêu đêm, coi là điềm báo tin buồn hoặc chuyện chẳng lành trong họ hàng. Mơ thấy cú mèo đậu trên mái nhà nhắc bạn quan tâm đến sức khỏe người thân, nhất là người già, và tránh làm việc mạo hiểm, đi xa đêm hôm trong thời gian tới. Đây là lời nhắc cẩn trọng chứ không phải định mệnh.",
    advice:
      "Hãy dành thời gian thăm hỏi, quan tâm người thân. Sự chu đáo của bạn chính là 'bùa hộ mệnh' tốt nhất.",
    numbers: [1, 41],
  },
  {
    slug: "mo-thay-doi",
    title: "Mơ thấy dơi",
    keywords: ["dơi", "doi", "dơi bay", "đàn dơi"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Dơi trong chữ Hán đồng âm với 'phúc' — có thể là điềm phúc lộc, tùy cảm xúc trong mơ.",
    meaning:
      "Thú vị là chữ 'dơi' (bức) trong tiếng Hán đồng âm với 'phúc', nên đàn dơi bay vào nhà xưa kia được xem là 'ngũ phúc lâm môn'. Tuy nhiên, nhiều người lại sợ dơi vì vẻ ngoài kỳ lạ. Vì vậy điềm báo phụ thuộc vào cảm giác của bạn: thấy vui, nhẹ nhõm là điềm phúc lộc; thấy sợ hãi, bị dơi bám thì nên chú ý sức khỏe và tránh thị phi.",
    advice:
      "Hãy nhìn sự việc từ góc độ tích cực hơn — điều bạn sợ hãi có khi lại là phúc lành ngụy trang.",
    numbers: [30, 70],
  },
  {
    slug: "mo-thay-kien",
    title: "Mơ thấy kiến",
    keywords: ["kiến", "kien", "đàn kiến", "kiến bò", "kiến cắn"],
    category: "dong-vat",
    omen: "tot",
    summary: "Đàn kiến đoàn kết tượng trưng cho sự tích lũy — 'kiến tha lâu đầy tổ'.",
    meaning:
      "Kiến là biểu tượng của sự cần cù và đoàn kết. Mơ thấy đàn kiến tha mồi về tổ là điềm tốt cho người làm ăn: tích tiểu thành đại, tiền bạc dần dư dả. Kiến bò thành hàng còn báo công việc tập thể thuận lợi, được đồng nghiệp hỗ trợ. Chỉ khi bị kiến cắn đau hay kiến bu đầy người mới cần lưu ý chuyện nhỏ nhặt gây phiền phức.",
    advice:
      "Đừng coi thường những khoản tích lũy nhỏ — 'năng nhặt chặt bị', thành công đến từ sự đều đặn mỗi ngày.",
    numbers: [19, 59],
  },
  {
    slug: "mo-thay-luon",
    title: "Mơ thấy lươn",
    keywords: ["lươn", "luon", "bắt lươn", "lươn bò"],
    category: "dong-vat",
    omen: "trung-tinh",
    summary: "Lươn trơn tuột tượng trưng cho sự khéo léo vượt khó — việc khó sẽ 'trôi' qua.",
    meaning:
      "Lươn trơn, khó bắt nên trong mơ tượng trưng cho những việc tưởng khó mà lại suôn sẻ nếu bạn khéo léo. Bắt được lươn là điềm nắm bắt được cơ hội tưởng chừng vuột mất. Lươn còn gắn với món ăn dân dã, báo hiệu cuộc sống đủ đầy, không thiếu thốn. Lươn quấn lấy người thì nên cẩn thận chuyện tình cảm rắc rối.",
    advice:
      "Hãy mềm dẻo, linh hoạt như lươn — cứng nhắc chỉ làm mọi việc thêm khó.",
    numbers: [14, 54],
  },
  // ---------------- THIÊN NHIÊN ----------------
  {
    slug: "mo-thay-mua",
    title: "Mơ thấy mưa",
    keywords: ["mưa", "mua", "trời mưa", "mưa to", "mưa nhỏ", "dầm mưa"],
    category: "thien-nhien",
    omen: "trung-tinh",
    summary: "Mưa nhỏ là lộc trời, mưa to bão tố là phiền muộn — điềm báo tùy theo cơn mưa.",
    meaning:
      "Mưa trong dân gian là lộc trời cho, tưới mát ruộng đồng. Mơ thấy mưa nhỏ, mưa phùn là điềm tài lộc nhỏ nhưng đều đặn sắp đến. Mưa to, mưa như trút nước báo hiệu cảm xúc dồn nén, phiền muộn cần được giải tỏa. Đi dưới mưa mà thấy nhẹ nhõm là điềm gột rửa muộn phiền, khởi đầu mới thanh thản.",
    advice:
      "Nếu mơ mưa to, hãy tìm cách xả stress và chia sẻ nỗi lòng với người tin cậy. Mưa rồi trời sẽ lại sáng.",
    numbers: [7, 47, 67],
  },
  {
    slug: "mo-thay-bao",
    title: "Mơ thấy bão",
    keywords: ["bão", "bao", "bão tố", "giông bão", "lốc xoáy"],
    category: "thien-nhien",
    omen: "xau",
    summary: "Bão tố trong mơ báo hiệu biến động lớn sắp ập đến — cần chuẩn bị tâm thế vững vàng.",
    meaning:
      "Bão là hiện thân của sự hỗn loạn và thay đổi dữ dội. Mơ thấy bão tố, lốc xoáy cuốn phăng mọi thứ là điềm cảnh báo biến cố trong công việc hoặc gia đình: có thể là thay đổi nhân sự, mâu thuẫn bùng nổ. Trú ẩn an toàn qua cơn bão trong mơ là điềm tốt — bạn đủ bản lĩnh vượt qua sóng gió.",
    advice:
      "Hãy gia cố 'nền móng': tài chính dự phòng, sức khỏe và các mối quan hệ quan trọng. Bình tĩnh đón bão, rồi bão sẽ tan.",
    numbers: [8, 48, 68],
  },
  {
    slug: "mo-thay-sam-set",
    title: "Mơ thấy sấm sét",
    keywords: ["sấm", "sét", "sam set", "sấm chớp", "sét đánh", "tia chớp"],
    category: "thien-nhien",
    omen: "trung-tinh",
    summary: "Sấm sét là sự thức tỉnh đột ngột — thay đổi lớn đến bất ngờ, tốt xấu tùy cách đón nhận.",
    meaning:
      "Tiếng sấm vang trời trong dân gian tượng trưng cho quyền uy của trời đất, đánh thức vạn vật. Mơ thấy sấm sét báo hiệu một sự kiện bất ngờ sắp xảy ra làm thay đổi cục diện — có thể là tin vui lớn hoặc cú sốc. Sét đánh trúng nhà là điềm cần cẩn thận hỏa hoạn, điện đóm và tranh chấp. Thấy chớp sáng mà không sợ là điềm trí tuệ bừng sáng, tìm ra lối thoát.",
    advice:
      "Chuẩn bị tinh thần cho điều bất ngờ. Kiểm tra an toàn điện, lửa trong nhà để yên tâm.",
    numbers: [6, 46, 66],
  },
  {
    slug: "mo-thay-lu-lut",
    title: "Mơ thấy lũ lụt",
    keywords: ["lũ lụt", "lu lut", "ngập lụt", "nước lũ", "vỡ đê"],
    category: "thien-nhien",
    omen: "xau",
    summary: "Nước lũ tràn ngập tượng trưng cho cảm xúc vỡ bờ và nguy cơ hao tài.",
    meaning:
      "Lũ lụt trong mơ thường phản ánh tâm trạng bị cảm xúc tiêu cực nhấn chìm: lo âu, buồn bã dồn nén quá lâu. Nước lũ cuốn trôi nhà cửa còn là điềm hao tài tốn của, cần thắt chặt chi tiêu. Bơi thoát khỏi dòng lũ là điềm tốt — bạn sẽ vượt qua giai đoạn khó khăn bằng nghị lực của mình.",
    advice:
      "Đừng để cảm xúc 'ngập lụt' lý trí. Hãy sắp xếp lại tài chính và tìm người chia sẻ.",
    numbers: [11, 51, 71],
  },
  {
    slug: "mo-thay-nuoc-trong",
    title: "Mơ thấy nước trong",
    keywords: ["nước trong", "nuoc trong", "nước suối", "nước giếng trong", "uống nước trong"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Nước trong vắt như tâm hồn thanh thản — điềm lành về sức khỏe và tài lộc.",
    meaning:
      "Nước trong tượng trưng cho sự thuần khiết, minh bạch. Mơ thấy dòng nước trong vắt, uống nước suối mát lành là điềm sức khỏe dồi dào, tâm trí sáng suốt, mọi việc hanh thông. Nước trong còn báo hiệu tài lộc 'sạch' — tiền bạc kiếm được bằng con đường chính đáng, bền vững. Tắm trong nước trong là điềm gột rửa bệnh tật, muộn phiền.",
    advice:
      "Hãy sống ngay thẳng, minh bạch — vận may đang mỉm cười với người có tâm trong sáng.",
    numbers: [16, 36, 56],
  },
  {
    slug: "mo-thay-nuoc-duc",
    title: "Mơ thấy nước đục",
    keywords: ["nước đục", "nuoc duc", "nước bẩn", "nước đen", "bùn"],
    category: "thien-nhien",
    omen: "xau",
    summary: "Nước đục ngầu báo hiệu rắc rối, thị phi và những điều mờ ám quanh bạn.",
    meaning:
      "Trái với nước trong, nước đục tượng trưng cho sự mờ ám, không rõ ràng. Mơ thấy lội trong nước đục, uống nước bẩn là điềm sắp vướng thị phi, bị hiểu lầm hoặc dính vào chuyện không minh bạch. Công việc có dấu hiệu 'đục nước béo cò' — ai đó đang lợi dụng tình hình rối ren. Hãy thận trọng với giấy tờ, hợp đồng.",
    advice:
      "Đừng vội quyết định khi mọi thứ còn mờ mịt. Hãy chờ 'nước lắng trong' rồi hãy hành động.",
    numbers: [9, 29, 49],
  },
  {
    slug: "mo-thay-bien",
    title: "Mơ thấy biển",
    keywords: ["biển", "bien", "đại dương", "sóng biển", "bãi biển", "biển xanh"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Biển cả bao la tượng trưng cho cơ hội rộng mở và tấm lòng khoáng đạt.",
    meaning:
      "Biển trong mơ là biểu tượng của sự bao la, tiềm năng vô hạn. Biển xanh êm đềm, sóng vỗ nhẹ là điềm tâm hồn thanh thản, sự nghiệp rộng mở, 'biển rộng cá nhảy'. Tắm biển, bơi ra khơi báo hiệu bạn sắp chinh phục thử thách lớn thành công. Biển động, sóng dữ thì cần đề phòng sóng gió cuộc đời, nhưng người bản lĩnh vẫn vượt qua.",
    advice:
      "Hãy nghĩ lớn và hành động lớn — đại dương cơ hội đang chờ người dám ra khơi.",
    numbers: [11, 31, 51],
  },
  {
    slug: "mo-thay-song",
    title: "Mơ thấy sông",
    keywords: ["sông", "song", "dòng sông", "qua sông", "bến sông", "sông nước"],
    category: "thien-nhien",
    omen: "trung-tinh",
    summary: "Dòng sông trôi là dòng đời — điềm báo về hành trình cuộc sống đang êm đềm hay gập ghềnh.",
    meaning:
      "Sông nước gắn liền với đời sống người Việt. Mơ thấy dòng sông êm đềm trôi là điềm cuộc sống ổn định, mọi việc theo đúng quỹ đạo. Qua sông an toàn báo vượt qua khó khăn. Sông cạn, sông đục thì cần xem lại dòng tiền và sức khỏe. Bến sông còn là nơi chia ly, hội ngộ — giấc mơ có thể báo tin người xa về.",
    advice:
      "Hãy thuận theo dòng chảy tự nhiên, đừng cố bơi ngược — có những việc cần thời gian.",
    numbers: [15, 35, 55],
  },
  {
    slug: "mo-thay-nui",
    title: "Mơ thấy núi",
    keywords: ["núi", "nui", "leo núi", "đỉnh núi", "núi cao", "dãy núi"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Núi cao vững chãi — điềm báo mục tiêu lớn và ý chí kiên định sẽ đưa bạn lên đỉnh.",
    meaning:
      "Núi tượng trưng cho sự vững chắc, bền lâu và khát vọng vươn cao. Mơ thấy leo lên đỉnh núi thành công là điềm đại cát: chinh phục được mục tiêu lớn, đỗ đạt, thăng tiến. Núi xanh tươi báo gia đình vững mạnh như núi. Đứng trên đỉnh núi ngắm cảnh là điềm nhìn xa trông rộng, sắp có quyết định sáng suốt.",
    advice:
      "Đừng sợ núi cao — mỗi bước chân kiên trì đều đưa bạn gần đỉnh vinh quang hơn.",
    numbers: [19, 59, 79],
  },
  {
    slug: "mo-thay-lua",
    title: "Mơ thấy lửa",
    keywords: ["lửa", "lua", "cháy", "đám cháy", "lửa cháy", "cháy nhà", "lửa đỏ"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Lửa đỏ rực trong dân gian là điềm phát — 'lửa' mang tài lộc và năng lượng bùng nổ.",
    meaning:
      "Người xưa có câu 'lửa đỏ thì phát' — mơ thấy lửa cháy rực rỡ, bếp lửa hồng là điềm tài lộc hanh thông, làm ăn phát đạt, gia đình ấm no. Lửa còn tượng trưng cho đam mê, nhiệt huyết đang bùng cháy. Tuy nhiên, lửa cháy lan mất kiểm soát, bỏng rát thì cần kiềm chế cơn nóng giận và cẩn thận hỏa hoạn thực tế.",
    advice:
      "Hãy thắp lên ngọn lửa đam mê trong công việc — năng lượng tích cực sẽ thu hút vận may.",
    numbers: [27, 67, 87],
  },
  {
    slug: "mo-thay-mat-troi",
    title: "Mơ thấy mặt trời",
    keywords: ["mặt trời", "mat troi", "bình minh", "nắng", "nhật"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Mặt trời rực rỡ là điềm đại cát về danh vọng, quyền lực và sức sống.",
    meaning:
      "Mặt trời là nguồn sáng của vạn vật, tượng trưng cho vua chúa, danh vọng. Mơ thấy mặt trời mọc rực rỡ, bình minh huy hoàng là điềm công danh sáng lạn, 'như mặt trời ban mai'. Người bệnh mơ thấy nắng ấm là điềm tai qua nạn khỏi. Ôm mặt trời trong lòng theo sách xưa là điềm sinh quý tử, đỗ đạt cao.",
    advice:
      "Hãy sống như mặt trời — tỏa sáng bằng chính năng lực và lan tỏa ấm áp đến mọi người.",
    numbers: [18, 58, 78],
  },
  {
    slug: "mo-thay-mat-trang",
    title: "Mơ thấy mặt trăng",
    keywords: ["mặt trăng", "mat trang", "trăng rằm", "trăng sáng", "nguyệt"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Trăng rằm tròn đầy là điềm viên mãn về tình cảm và gia đạo sum vầy.",
    meaning:
      "Trăng trong văn hóa Việt gắn với tình yêu, nỗi nhớ và sự đoàn viên (Tết Trung thu). Mơ thấy trăng rằm sáng vằng vặc là điềm tình duyên viên mãn, gia đình sum họp. Trăng khuyết thì tình cảm có chút trắc trở nhưng sẽ tròn đầy trở lại. Ngắm trăng cùng người thương báo hỷ sự gần kề.",
    advice:
      "Hãy dành thời gian cho người thân yêu — khoảnh khắc đoàn viên đáng giá hơn mọi của cải.",
    numbers: [12, 42, 72],
  },
  {
    slug: "mo-thay-sao",
    title: "Mơ thấy sao",
    keywords: ["sao", "ngôi sao", "sao băng", "bầu trời sao", "sao sáng"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Sao sáng trên trời là hiện thân của hy vọng — ước mơ của bạn sắp thành hiện thực.",
    meaning:
      "Ngắm sao băng và ước nguyện là niềm tin phổ biến. Mơ thấy sao băng vụt qua báo hiệu điều ước thầm kín sắp thành sự thật. Bầu trời đầy sao là điềm nhiều cơ hội, quý nhân xuất hiện. Sao mai (sao Hôm) sáng rực còn là điềm dẫn lối — bạn sắp tìm ra hướng đi đúng đắn sau thời gian mông lung.",
    advice:
      "Đừng ngừng ước mơ và hy vọng — ngôi sao may mắn đang chiếu sáng con đường bạn đi.",
    numbers: [22, 44, 66],
  },
  {
    slug: "mo-thay-cau-vong",
    title: "Mơ thấy cầu vồng",
    keywords: ["cầu vồng", "cau vong", "mống", "bảy sắc cầu vồng"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Cầu vồng sau mưa là lời hứa của trời đất — khó khăn qua đi, tươi sáng đang tới.",
    meaning:
      "Cầu vồng chỉ xuất hiện sau cơn mưa, vì vậy nó là biểu tượng của hy vọng sau gian khó. Mơ thấy cầu vồng rực rỡ bảy sắc là điềm mọi muộn phiền sắp tan biến, vận may đang đến. Người đang bệnh tật, khó khăn mơ thấy cầu vồng là điềm tai qua nạn khỏi, 'sau cơn mưa trời lại sáng'.",
    advice:
      "Hãy kiên nhẫn thêm chút nữa — cầu vồng chỉ dành cho người đủ bền bỉ đi qua cơn mưa.",
    numbers: [4, 24, 44],
  },
  {
    slug: "mo-thay-hoa-hong",
    title: "Mơ thấy hoa hồng",
    keywords: ["hoa hồng", "hoa hong", "hồng đỏ", "hồng nhung", "tặng hoa hồng"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Hoa hồng đỏ thắm là sứ giả của tình yêu nồng nàn sắp nở rộ.",
    meaning:
      "Hoa hồng là biểu tượng toàn cầu của tình yêu. Mơ thấy hoa hồng đỏ rực, được tặng hoa hồng là điềm tình duyên thăng hoa: người độc thân sắp gặp tiếng sét ái tình, người có đôi thì tình cảm thêm sâu đậm. Vườn hồng nở rộ báo gia đình hạnh phúc, cuộc sống thêm hương sắc. Chỉ cần lưu ý gai hồng — tình yêu đẹp cũng cần sự khéo léo vun đắp.",
    advice:
      "Hãy mạnh dạn bày tỏ tình cảm — hoa hồng chỉ nở cho người dám gieo hạt yêu thương.",
    numbers: [20, 40, 60],
  },
  {
    slug: "mo-thay-hoa-sen",
    title: "Mơ thấy hoa sen",
    keywords: ["hoa sen", "hoa sen trắng", "sen hồng", "đầm sen", "bông sen"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Sen 'gần bùn mà chẳng hôi tanh mùi bùn' — điềm thanh cao, bình an và thoát tục.",
    meaning:
      "Hoa sen là quốc hoa của Việt Nam, biểu tượng của sự thanh khiết, giác ngộ trong Phật giáo. Mơ thấy sen nở trong đầm là điềm tâm hồn được gột rửa, muộn phiền tan biến, gia đạo bình an. Sen trắng báo hiệu sự trong sạch, được minh oan. Người tu tâm dưỡng tính mơ thấy sen là điềm công đức viên mãn.",
    advice:
      "Hãy giữ tâm thanh tịnh giữa dòng đời xô bồ — như sen, càng trong bùn càng tỏa hương.",
    numbers: [24, 44, 64],
  },
  {
    slug: "mo-thay-hoa-dao",
    title: "Mơ thấy hoa đào",
    keywords: ["hoa đào", "hoa dao", "đào nở", "cành đào", "đào tết"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Đào nở báo xuân về — điềm hỷ sự, tài lộc và khởi đầu mới đầy sức sống.",
    meaning:
      "Hoa đào là sứ giả của mùa xuân và Tết cổ truyền. Mơ thấy đào nở rộ là điềm năm mới an khang, gia đình có hỷ sự như cưới hỏi, sinh con. Đào còn xua đuổi tà ma theo quan niệm dân gian, nên giấc mơ này cũng mang ý nghĩa được che chở, tai ương tránh xa. Người kinh doanh mơ thấy đào là điềm 'xuân' của sự nghiệp.",
    advice:
      "Hãy chuẩn bị đón nhận những điều mới mẻ tốt đẹp — mùa xuân của cuộc đời bạn đang đến.",
    numbers: [21, 41, 61],
  },
  {
    slug: "mo-thay-cay-xanh",
    title: "Mơ thấy cây xanh",
    keywords: ["cây xanh", "cay xanh", "cây cổ thụ", "rừng cây", "cây đâm chồi"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Cây đâm chồi nảy lộc là biểu tượng của sức sống và sự phát triển bền vững.",
    meaning:
      "Cây cối tượng trưng cho sự sống, sức khỏe và sự phát triển. Mơ thấy cây xanh tốt, đâm chồi nảy lộc là điềm sức khỏe dồi dào, công việc sinh sôi. Cây cổ thụ rễ sâu báo nền tảng gia đình vững chắc, phúc đức tổ tiên dày. Trồng cây trong mơ là điềm đầu tư cho tương lai — gieo nhân lành gặt quả ngọt.",
    advice:
      "Hãy chăm sóc 'cái cây' cuộc đời mình mỗi ngày — sức khỏe, tri thức và các mối quan hệ.",
    numbers: [15, 35, 55],
  },
  {
    slug: "mo-thay-trai-cay",
    title: "Mơ thấy trái cây chín",
    keywords: ["trái cây", "trai cay", "quả chín", "hái quả", "táo", "cam", "nho"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Quả chín mọng là thành quả ngọt ngào — điềm gặt hái sau bao ngày vun trồng.",
    meaning:
      "Trái cây chín trong mơ là phần thưởng cho sự kiên trì. Hái được quả ngọt, quả to là điềm công việc sắp thu hoạch thành quả xứng đáng: dự án thành công, thi cử đỗ đạt, đầu tư sinh lời. Mâm ngũ quả ngày Tết còn tượng trưng cho phú quý, nên giấc mơ này cũng báo gia đình sung túc, đủ đầy.",
    advice:
      "Đã đến mùa thu hoạch — hãy tự tin đón nhận thành quả và chia sẻ niềm vui với mọi người.",
    numbers: [21, 73, 34],
  },
  {
    slug: "mo-thay-la-rung",
    title: "Mơ thấy lá rụng",
    keywords: ["lá rụng", "la rung", "lá vàng", "lá khô", "mùa thu lá rụng"],
    category: "thien-nhien",
    omen: "xau",
    summary: "Lá vàng rơi báo hiệu sự hao tổn, chia ly — nhưng cũng là quy luật để đón lộc mới.",
    meaning:
      "Lá rụng về cội, mùa thu lá bay trong văn hóa Việt thường gợi nỗi buồn chia ly, hao tổn. Mơ thấy lá vàng rụng đầy sân là điềm cần cẩn thận tiền bạc thất thoát, hoặc mối quan hệ nào đó đang phai nhạt. Tuy nhiên, lá rụng cũng là để cây đâm chồi mới — đây có thể là lời nhắc buông bỏ điều cũ kỹ để đón nhận điều tốt đẹp hơn.",
    advice:
      "Đừng níu kéo những gì đã đến lúc ra đi. Buông bỏ đúng lúc là cách để lòng nhẹ nhõm.",
    numbers: [19, 39, 59],
  },
  {
    slug: "mo-thay-dong-dat",
    title: "Mơ thấy động đất",
    keywords: ["động đất", "dong dat", "rung chuyển", "đất nứt", "nhà rung"],
    category: "thien-nhien",
    omen: "xau",
    summary: "Đất rung núi chuyển báo hiệu nền tảng cuộc sống đang lung lay — cần gia cố lại.",
    meaning:
      "Đất là nền tảng vững chắc nhất, nên động đất trong mơ tượng trưng cho sự bất ổn sâu sắc: có thể là biến động trong gia đình, công việc hoặc niềm tin bị lung lay. Nhà cửa nứt nẻ báo cần quan tâm đến tổ ấm nhiều hơn. Thoát khỏi đống đổ nát an toàn là điềm bạn đủ mạnh mẽ để xây dựng lại từ đầu.",
    advice:
      "Hãy xem lại những 'nền móng' quan trọng: sức khỏe, tài chính và gia đình. Gia cố từ gốc mới bền lâu.",
    numbers: [17, 37, 57],
  },
  {
    slug: "mo-thay-suong-mu",
    title: "Mơ thấy sương mù",
    keywords: ["sương mù", "suong mu", "mù mịt", "sương giăng", "không nhìn rõ"],
    category: "thien-nhien",
    omen: "xau",
    summary: "Màn sương mù mịt tượng trưng cho sự mông lung, thiếu rõ ràng trong quyết định.",
    meaning:
      "Sương mù che khuất tầm nhìn, nên trong mơ nó phản ánh tâm trạng hoang mang, không biết đường nào mà lần. Lạc trong sương mù là điềm bạn đang mất phương hướng trong công việc hoặc tình cảm. Sương tan, trời sáng trong mơ là điềm tốt — sự thật sắp được phơi bày, mọi thứ sẽ rõ ràng.",
    advice:
      "Đừng vội quyết định khi còn 'mù mờ'. Hãy thu thập thêm thông tin và chờ sương tan.",
    numbers: [10, 50, 70],
  },
  {
    slug: "mo-thay-gieng-nuoc",
    title: "Mơ thấy giếng nước",
    keywords: ["giếng", "gieng", "giếng nước", "múc nước giếng", "giếng khơi"],
    category: "thien-nhien",
    omen: "tot",
    summary: "Giếng sâu nước mát là nguồn tài lộc bền vững — 'ăn quả nhớ kẻ trồng cây'.",
    meaning:
      "Giếng làng trong văn hóa Việt là nguồn sống của cả cộng đồng, tượng trưng cho tài nguyên sâu sắc, bền vững. Mơ thấy giếng đầy nước trong là điềm tài lộc dồi dào, có nguồn thu ổn định lâu dài. Múc nước giếng lên uống báo sức khỏe tốt, tinh thần sảng khoái. Giếng cạn thì nên tiết kiệm, đừng tiêu xài hoang phí.",
    advice:
      "Hãy biết ơn những 'giếng nước' trong đời — gia đình, bạn bè, công việc ổn định — và giữ gìn chúng.",
    numbers: [29, 49, 69],
  },
  {
    slug: "mo-thay-tuyet",
    title: "Mơ thấy tuyết",
    keywords: ["tuyết", "tuyet", "tuyết rơi", "băng tuyết", "trời tuyết"],
    category: "thien-nhien",
    omen: "trung-tinh",
    summary: "Tuyết trắng tinh khôi tượng trưng cho sự thanh khiết, nhưng cũng báo lạnh lẽo tình cảm.",
    meaning:
      "Tuyết trắng tượng trưng cho sự trong sạch, khởi đầu tinh khôi. Mơ thấy tuyết rơi nhẹ, cảnh tuyết đẹp là điềm tâm hồn được thanh lọc, muộn phiền tan như tuyết tan. Nhưng bão tuyết, lạnh giá thấu xương lại báo tình cảm đang 'đóng băng' — mối quan hệ cần được hâm nóng. Trượt tuyết vui vẻ là điềm biết tận hưởng cuộc sống.",
    advice:
      "Hãy sưởi ấm các mối quan hệ bằng sự quan tâm chân thành — đừng để tình cảm 'đóng băng'.",
    numbers: [8, 28, 48],
  },
  // ---------------- CON NGƯỜI ----------------
  {
    slug: "mo-thay-em-be",
    title: "Mơ thấy em bé",
    keywords: ["em bé", "em be", "trẻ sơ sinh", "bé con", "bồng em bé", "trẻ con"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Em bé là biểu tượng của khởi đầu mới tinh khôi — điềm lành cho mọi dự định.",
    meaning:
      "Em bé trong mơ tượng trưng cho sự khởi đầu, tiềm năng và niềm hy vọng mới. Bồng em bé kháu khỉnh, em bé cười là điềm đại cát: dự án mới thuận lợi, gia đình sắp có tin vui về con cái. Em bé khóc thì cần quan tâm hơn đến 'đứa con tinh thần' của mình — có thể dự án đang cần bạn chăm sóc kỹ hơn.",
    advice:
      "Hãy nâng niu những khởi đầu mới như nâng niu em bé — kiên nhẫn, dịu dàng và đầy yêu thương.",
    numbers: [9, 19, 99],
  },
  {
    slug: "mo-thay-dam-cuoi",
    title: "Mơ thấy đám cưới",
    keywords: ["đám cưới", "dam cuoi", "cưới hỏi", "lễ cưới", "cô dâu", "chú rể", "đi ăn cưới"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Đám cưới linh đình là điềm hỷ — không chỉ tình duyên mà cả sự nghiệp sắp 'kết duyên' thành công.",
    meaning:
      "Dân gian quan niệm mơ thấy đám cưới là điềm hỷ lớn. Người độc thân sắp gặp ý trung nhân; người có đôi thì tình cảm tiến triển tốt đẹp. Trong công việc, đám cưới tượng trưng cho sự 'kết hợp' thành công — hợp tác làm ăn thuận lợi, ký kết suôn sẻ. Đi ăn cưới vui vẻ còn báo bạn sắp nhận được tin mừng từ người thân.",
    advice:
      "Hãy mở lòng với các mối quan hệ hợp tác mới — 'duyên lành' đang đến cả trong tình cảm lẫn sự nghiệp.",
    numbers: [26, 46, 66],
  },
  {
    slug: "mo-thay-dam-tang",
    title: "Mơ thấy đám tang",
    keywords: ["đám tang", "dam tang", "đám ma", "tang lễ", "đi viếng", "khóc tang"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Đừng sợ! Dân gian có câu 'sinh dữ tử lành' — mơ thấy tang ma thường là điềm hóa giải, kết thúc để bắt đầu.",
    meaning:
      "Người Việt xưa tin rằng 'sinh dữ tử lành' — mơ thấy đám tang, người chết không phải điềm gở mà là điềm kết thúc một giai đoạn cũ để bước sang trang mới tốt đẹp hơn. Đi viếng đám tang trong mơ còn báo bạn sắp trút được gánh nặng, muộn phiền được hóa giải. Khóc trong đám tang là điềm xả xui, sau đó mọi việc hanh thông.",
    advice:
      "Hãy xem đây là cơ hội để khép lại quá khứ, tha thứ và bắt đầu lại với tâm thế nhẹ nhõm.",
    numbers: [25, 52, 65],
  },
  {
    slug: "mo-thay-nguoi-da-khuat",
    title: "Mơ thấy người thân đã khuất",
    keywords: ["người chết", "người đã mất", "ông bà", "tổ tiên", "bố mẹ đã mất", "người khuất"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Giấc mơ gặp người đã khuất thường là nỗi nhớ thương, và cũng là điềm được phù hộ.",
    meaning:
      "Trong tín ngưỡng thờ cúng tổ tiên của người Việt, mơ thấy ông bà cha mẹ đã khuất về thăm là điềm được phù hộ độ trì — con cháu sắp gặp may mắn. Nếu người khuất mỉm cười, cho quà là điềm đại cát. Người khuất buồn rầu, khóc lóc thì nên xem lại việc thờ cúng, hương khói và quan tâm đến mồ mả tổ tiên. Đây cũng có thể đơn giản là nỗi nhớ thương chưa nguôi.",
    advice:
      "Hãy thắp nén hương tưởng nhớ tổ tiên và sống tốt để không phụ lòng người đã khuất.",
    numbers: [26, 65, 75],
  },
  {
    slug: "mo-thay-me",
    title: "Mơ thấy mẹ",
    keywords: ["mẹ", "me", "mẹ hiền", "mẹ ôm", "mẹ cười", "mẹ nấu cơm"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Mẹ là biểu tượng của sự che chở vô điều kiện — điềm bình an và được bảo vệ.",
    meaning:
      "Mơ thấy mẹ hiền mỉm cười, mẹ nấu cơm hay ôm mình vào lòng là điềm đại lành: bạn đang được che chở, mọi khó khăn sẽ có người giúp đỡ vượt qua. Mẹ trong mơ còn tượng trưng cho trực giác và sự bao dung — hãy lắng nghe tiếng nói từ trái tim. Mẹ buồn, mẹ khóc thì nên gọi điện về thăm mẹ ngay, có thể mẹ đang nhớ bạn.",
    advice:
      "Hãy gọi điện về cho mẹ nếu đã lâu chưa liên lạc — đôi khi giấc mơ chỉ là tiếng lòng nhớ nhà.",
    numbers: [1, 21, 41],
  },
  {
    slug: "mo-thay-cha",
    title: "Mơ thấy cha",
    keywords: ["cha", "bố", "ba", "phụ thân", "cha dạy bảo"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Cha là trụ cột, biểu tượng của sức mạnh và trách nhiệm — điềm được tiếp thêm bản lĩnh.",
    meaning:
      "Mơ thấy cha khỏe mạnh, cha dạy bảo là điềm bạn sắp nhận được sự chỉ dẫn quý giá hoặc tự mình đủ bản lĩnh gánh vác việc lớn. Cha trong mơ tượng trưng cho lý trí, kỷ luật và trách nhiệm — nhắc bạn sống có nguyên tắc hơn. Cha mỉm cười hài lòng là điềm con đường bạn chọn đúng đắn, được tổ tiên phù hộ.",
    advice:
      "Hãy sống xứng đáng với niềm tin của cha — trách nhiệm và bản lĩnh sẽ đưa bạn đi xa.",
    numbers: [4, 24, 44],
  },
  {
    slug: "mo-thay-ban-be",
    title: "Mơ thấy bạn bè",
    keywords: ["bạn bè", "ban be", "bạn thân", "bạn cũ", "họp lớp", "bạn học"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Bạn bè trong mơ là điềm quý nhân — sắp có người giúp đỡ hoặc tin vui từ bạn phương xa.",
    meaning:
      "Mơ thấy bạn bè vui vẻ tụ họp là điềm tình bạn bền chặt, sắp nhận được sự giúp đỡ đúng lúc khó khăn. Gặp lại bạn cũ lâu ngày báo tin vui từ phương xa hoặc cơ hội hợp tác bất ngờ. Bạn bè trong mơ còn phản ánh chính những phẩm chất của bạn — hãy để ý xem người bạn đó tượng trưng cho điều gì trong con người bạn.",
    advice:
      "Hãy chủ động liên lạc với bạn cũ — một cuộc gặp gỡ có thể mở ra cơ hội không ngờ.",
    numbers: [12, 32, 52],
  },
  {
    slug: "mo-thay-sinh-con",
    title: "Mơ thấy sinh con",
    keywords: ["sinh con", "sinh be", "đẻ con", "vượt cạn", "sinh đôi"],
    category: "con-nguoi",
    omen: "tot",
    summary: "'Mẹ tròn con vuông' trong mơ là điềm sáng tạo nở hoa — dự án, ý tưởng sắp thành hình.",
    meaning:
      "Sinh con trong mơ không chỉ nói về con cái mà còn tượng trưng cho sự 'sinh nở' về tinh thần: ý tưởng mới, dự án mới sắp ra đời thành công. Sinh con trai theo dân gian là điềm mạnh mẽ về sự nghiệp; sinh con gái là điềm dịu dàng về tình cảm. Sinh đôi là điềm song hỷ — niềm vui nhân đôi. Vượt cạn suôn sẻ báo mọi khó khăn sẽ qua.",
    advice:
      "Hãy dũng cảm 'sinh ra' ý tưởng đã ấp ủ lâu nay — thời điểm chín muồi đã đến.",
    numbers: [9, 19, 29],
  },
  {
    slug: "mo-thay-mang-thai",
    title: "Mơ thấy mang thai",
    keywords: ["mang thai", "có bầu", "có thai", "bầu bí", "thai nghén"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Bụng mang dạ chửa là hình ảnh ấp ủ — kế hoạch lớn đang thai nghén, sắp đến ngày 'lâm bồn' thành công.",
    meaning:
      "Mang thai trong mơ tượng trưng cho quá trình ấp ủ, nuôi dưỡng một kế hoạch, dự án quan trọng. Thai kỳ khỏe mạnh báo dự án đang phát triển tốt, sắp đến ngày gặt hái. Người hiếm muộn mơ thấy mang thai là điềm lành về con cái theo quan niệm dân gian. Cảm giác hạnh phúc khi mang thai trong mơ còn báo sự viên mãn trong tâm hồn.",
    advice:
      "Hãy kiên nhẫn nuôi dưỡng kế hoạch như người mẹ mang thai — đừng vội vàng 'sinh non'.",
    numbers: [10, 30, 50],
  },
  {
    slug: "mo-thay-hon",
    title: "Mơ thấy hôn",
    keywords: ["hôn", "hon", "hôn nhau", "nụ hôn", "hôn người yêu"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Nụ hôn trong mơ là điềm gắn kết — tình cảm thăng hoa, mối quan hệ thêm sâu đậm.",
    meaning:
      "Hôn là biểu tượng của sự gắn kết, hòa hợp. Mơ thấy hôn người yêu thương là điềm tình cảm mặn nồng, sắp có bước tiến mới trong mối quan hệ. Hôn người lạ có thể báo bạn đang khao khát sự gần gũi, hoặc sắp gặp người khiến tim rung động. Hôn lên trán, lên má mang ý nghĩa trân trọng, kính yêu — điềm gia đình hòa thuận.",
    advice:
      "Hãy bày tỏ tình cảm một cách chân thành — đôi khi một cử chỉ nhỏ có sức mạnh hơn ngàn lời nói.",
    numbers: [7, 27, 47],
  },
  {
    slug: "mo-thay-danh-nhau",
    title: "Mơ thấy đánh nhau",
    keywords: ["đánh nhau", "danh nhau", "ẩu đả", "đánh lộn", "cãi nhau đánh nhau"],
    category: "con-nguoi",
    omen: "xau",
    summary: "Xô xát trong mơ phản ánh xung đột nội tâm hoặc mâu thuẫn ngoài đời cần hóa giải.",
    meaning:
      "Đánh nhau trong mơ thường là sự phóng chiếu của căng thẳng, ức chế dồn nén ngoài đời thực. Thắng trong trận đánh báo bạn đủ sức vượt qua đối thủ cạnh tranh. Thua trận thì nên tránh đối đầu trực diện lúc này, 'lùi một bước tiến ba bước'. Đánh nhau với người thân báo mâu thuẫn gia đình cần được hòa giải sớm kẻo rạn nứt.",
    advice:
      "Hãy giải tỏa căng thẳng bằng cách lành mạnh và chủ động hòa giải mâu thuẫn khi còn nhỏ.",
    numbers: [3, 23, 43],
  },
  {
    slug: "mo-thay-khoc",
    title: "Mơ thấy khóc",
    keywords: ["khóc", "khoc", "khóc nức nở", "rơi nước mắt", "khóc trong mơ"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Dân gian tin rằng 'khóc trong mơ là cười ngoài đời' — điềm xả xui, niềm vui sắp đến.",
    meaning:
      "Nước mắt trong mơ là cách tâm hồn tự gột rửa muộn phiền. Dân gian có câu 'nằm mơ thấy khóc thì tỉnh dậy sẽ cười' — khóc càng nức nở thì niềm vui sắp đến càng lớn. Đây là điềm bạn sắp trút được gánh nặng tâm lý, oan khuất được giải tỏa. Khóc rồi thấy nhẹ nhõm trong mơ báo tâm trạng sắp chuyển biến tích cực.",
    advice:
      "Đừng kìm nén cảm xúc — hãy để nước mắt (cả trong mơ lẫn ngoài đời) cuốn trôi muộn phiền.",
    numbers: [24, 64, 84],
  },
  {
    slug: "mo-thay-cuoi",
    title: "Mơ thấy cười",
    keywords: ["cười", "cuoi", "cười lớn", "cười vui", "cười ha hả"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Cười vui trong mơ là điềm tâm trạng thoải mái, nhưng dân gian cũng nhắc 'cười quá hóa... lo'.",
    meaning:
      "Mơ thấy mình cười vui vẻ, sảng khoái thường phản ánh tâm trạng lạc quan, cuộc sống đang có nhiều niềm vui — đây là điềm tốt về tinh thần. Tuy nhiên, dân gian cũng có câu 'vui quá hóa buồn', nhắc bạn đừng chủ quan, đắc ý quá mà lơ là. Cười một mình kỳ lạ trong mơ thì nên xem lại có điều gì đang khiến bạn bất an mà cố che giấu.",
    advice:
      "Hãy tận hưởng niềm vui hiện tại nhưng vẫn giữ sự tỉnh táo, khiêm tốn trong mọi việc.",
    numbers: [20, 40, 80],
  },
  {
    slug: "mo-thay-rung-rang",
    title: "Mơ thấy rụng răng",
    keywords: ["rụng răng", "rung rang", "răng rụng", "gãy răng", "răng lung lay", "nhổ răng"],
    category: "con-nguoi",
    omen: "xau",
    summary: "Một trong những giấc mơ phổ biến nhất — dân gian xem là điềm lo âu về sức khỏe người thân.",
    meaning:
      "Răng tượng trưng cho sức mạnh, sự tự tin và người thân trong gia đình. Mơ thấy rụng răng, răng lung lay là điềm khiến nhiều người lo lắng: dân gian cho rằng báo hiệu sức khỏe của người thân lớn tuổi cần được quan tâm, hoặc bạn đang mất tự tin, lo sợ 'mất mặt' trước người khác. Răng cửa rụng liên quan đến cha mẹ; răng hàm liên quan đến con cháu theo cách giải xưa.",
    advice:
      "Hãy quan tâm đến sức khỏe gia đình nhiều hơn và đừng quá lo — giấc mơ là lời nhắc chứ không phải lời nguyền.",
    numbers: [31, 32, 52],
  },
  {
    slug: "mo-thay-chay-mau",
    title: "Mơ thấy chảy máu",
    keywords: ["chảy máu", "chay mau", "máu", "đổ máu", "máu me", "vết thương chảy máu"],
    category: "con-nguoi",
    omen: "xau",
    summary: "Máu là sinh lực — chảy máu trong mơ báo hao tổn sức khỏe hoặc tiền bạc.",
    meaning:
      "Máu tượng trưng cho sinh lực, năng lượng sống. Mơ thấy chảy máu, vết thương rỉ máu là điềm bạn đang hao tổn sức lực vì lo toan, hoặc tiền bạc sắp có khoản chi lớn bất ngờ. Máu chảy nhiều báo cần nghỉ ngơi, bồi bổ sức khỏe ngay. Tuy nhiên, hiến máu trong mơ lại là điềm tốt — cho đi sẽ nhận lại nhiều hơn.",
    advice:
      "Hãy lắng nghe cơ thể, nghỉ ngơi đầy đủ và rà soát lại các khoản chi tiêu sắp tới.",
    numbers: [8, 19, 29],
  },
  {
    slug: "mo-thay-cat-toc",
    title: "Mơ thấy cắt tóc",
    keywords: ["cắt tóc", "cat toc", "hớt tóc", "tóc ngắn", "đi cắt tóc"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Cắt tóc là buông bỏ cái cũ — điềm thay đổi diện mạo, làm mới cuộc đời.",
    meaning:
      "Tóc gắn với diện mạo và sức sống. Mơ thấy cắt tóc, thay đổi kiểu tóc là điềm bạn đang muốn làm mới mình, buông bỏ quá khứ để bắt đầu trang mới — đây là điềm tích cực của sự chuyển mình. Tóc cắt đẹp, ưng ý báo thay đổi mang lại may mắn. Tóc bị cắt xấu, cắt trộm thì nên cẩn thận kẻo bị lợi dụng, 'cắt' mất cơ hội.",
    advice:
      "Nếu đang muốn thay đổi, đây là tín hiệu tốt để bắt đầu — từ diện mạo đến lối sống.",
    numbers: [18, 38, 58],
  },
  {
    slug: "mo-thay-toc-bac",
    title: "Mơ thấy tóc bạc",
    keywords: ["tóc bạc", "toc bac", "bạc đầu", "tóc trắng", "già đi"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Tóc bạc là dấu ấn của trí tuệ và trải nghiệm — nhưng cũng báo lo toan đang nhiều.",
    meaning:
      "Tóc bạc tượng trưng cho sự khôn ngoan, từng trải. Mơ thấy tóc mình bạc đi có thể báo bạn đang lo nghĩ nhiều đến mức 'bạc đầu' — cần giảm bớt gánh nặng tâm lý. Ngược lại, với người lớn tuổi, đây là điềm trường thọ, được kính trọng. Nhổ tóc bạc trong mơ là điềm muốn níu kéo tuổi trẻ, sợ già đi.",
    advice:
      "Hãy biến lo âu thành trí tuệ — và nhớ rằng mỗi sợi tóc bạc đều là một bài học quý giá.",
    numbers: [28, 48, 68],
  },
  {
    slug: "mo-bi-ruot-duoi",
    title: "Mơ bị rượt đuổi",
    keywords: ["rượt đuổi", "ruot duoi", "bị đuổi", "chạy trốn", "trốn chạy", "bị truy đuổi"],
    category: "con-nguoi",
    omen: "xau",
    summary: "Bị truy đuổi trong mơ là hình ảnh của áp lực — có điều gì đó bạn đang trốn tránh ngoài đời.",
    meaning:
      "Đây là một trong những giấc mơ phổ biến nhất của người hiện đại. Bị rượt đuổi tượng trưng cho áp lực công việc, deadline, nợ nần hay một vấn đề bạn đang cố lảng tránh. Chạy thoát được là điềm tốt — bạn đủ khả năng vượt qua. Bị bắt kịp thì đã đến lúc đối mặt thay vì chạy trốn, vì càng trốn vấn đề càng lớn.",
    advice:
      "Hãy dũng cảm đối mặt với điều đang khiến bạn lo sợ — 'đối mặt' là cách duy nhất để nó biến mất.",
    numbers: [3, 33, 73],
  },
  {
    slug: "mo-thay-nguoi-yeu-cu",
    title: "Mơ thấy người yêu cũ",
    keywords: ["người yêu cũ", "nguoi yeu cu", "tình cũ", "ex", "bạn trai cũ", "bạn gái cũ"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Người cũ xuất hiện trong mơ thường là chuyện chưa khép lại trong lòng, hơn là điềm báo tương lai.",
    meaning:
      "Mơ thấy người yêu cũ đa phần phản ánh tâm lý: có thể bạn còn vương vấn, hoặc một sự kiện hiện tại gợi nhớ về quá khứ. Vui vẻ bên người cũ trong mơ chưa chắc là muốn quay lại — có thể bạn chỉ đang nhớ cảm giác được yêu thương. Cãi nhau với người cũ là điềm bạn đã sẵn sàng buông bỏ hoàn toàn. Hãy thành thật với cảm xúc của mình.",
    advice:
      "Hãy tự hỏi: mình nhớ người ấy, hay chỉ nhớ cảm giác ngày xưa? Câu trả lời sẽ giúp bạn thanh thản.",
    numbers: [14, 24, 34],
  },
  {
    slug: "mo-thay-thay-co",
    title: "Mơ thấy thầy cô",
    keywords: ["thầy cô", "thay co", "thầy giáo", "cô giáo", "đi học", "trường học"],
    category: "con-nguoi",
    omen: "tot",
    summary: "Thầy cô trong mơ là điềm được chỉ dẫn — sắp có người dẫn đường hoặc bài học quý giá.",
    meaning:
      "Thầy cô tượng trưng cho tri thức và sự dẫn dắt. Mơ thấy thầy cô dạy bảo là điềm bạn sắp nhận được lời khuyên quý giá giúp tháo gỡ bế tắc, hoặc gặp được người thầy trong đời. Đi học, ngồi trong lớp báo bạn cần học hỏi thêm để tiến xa hơn. Thi cử với thầy cô coi thi thì xem thêm điềm 'đi thi'.",
    advice:
      "Hãy khiêm tốn học hỏi — người thầy của bạn có thể đang ở rất gần mà bạn chưa nhận ra.",
    numbers: [11, 31, 51],
  },
  {
    slug: "mo-thay-bac-si",
    title: "Mơ thấy bác sĩ",
    keywords: ["bác sĩ", "bac si", "khám bệnh", "bệnh viện", "y tá", "thuốc"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Bác sĩ xuất hiện là lời nhắc từ tiềm thức: hãy quan tâm đến sức khỏe của mình hơn.",
    meaning:
      "Mơ thấy đi khám bệnh, gặp bác sĩ thường là tín hiệu cơ thể đang 'kêu cứu' — bạn đã bỏ bê sức khỏe quá lâu. Được bác sĩ chữa khỏi bệnh là điềm tốt: vấn đề sức khỏe hay rắc rối sắp được giải quyết. Bác sĩ lắc đầu, bệnh nặng trong mơ thì đừng chủ quan — hãy đi kiểm tra sức khỏe thực tế để yên tâm.",
    advice:
      "Sức khỏe là vốn quý nhất. Hãy đặt lịch kiểm tra sức khỏe tổng quát nếu đã lâu chưa đi.",
    numbers: [16, 36, 56],
  },
  {
    slug: "mo-thay-trom-cap",
    title: "Mơ thấy trộm cắp",
    keywords: ["trộm", "trom", "ăn trộm", "trộm cắp", "bị trộm", "mất trộm"],
    category: "con-nguoi",
    omen: "xau",
    summary: "Trộm cắp trong mơ là điềm hao tài, mất mát — cần đề phòng cả người lẫn của.",
    meaning:
      "Mơ thấy nhà bị trộm đột nhập, mất đồ đạc là điềm cảnh báo hao tài tốn của: cẩn thận trộm cắp thực tế, đồng thời đề phòng bị lừa gạt trong làm ăn. Bắt được trộm trong mơ là điềm tốt — bạn sẽ ngăn chặn kịp thời thiệt hại. Tự mình đi ăn trộm trong mơ thì nên xem lại: có phải bạn đang 'lấy' thời gian, công sức của ai đó mà không hay?",
    advice:
      "Kiểm tra cửa nẻo, khóa kỹ tài sản và cẩn thận với những lời mời đầu tư 'ngon ăn' bất thường.",
    numbers: [6, 26, 46],
  },
  {
    slug: "mo-thay-nguoi-la",
    title: "Mơ thấy người lạ",
    keywords: ["người lạ", "nguoi la", "người không quen", "khách lạ", "người dưng"],
    category: "con-nguoi",
    omen: "trung-tinh",
    summary: "Người lạ trong mơ tượng trưng cho những khía cạnh chưa khám phá của bản thân và cơ hội mới.",
    meaning:
      "Người lạ xuất hiện trong mơ thường đại diện cho tiềm năng chưa được khai phá trong bạn, hoặc những cơ hội, mối quan hệ mới sắp đến. Người lạ thân thiện giúp đỡ là điềm quý nhân; người lạ đáng sợ, đe dọa thì phản ánh nỗi sợ hãi với điều chưa biết. Đám đông người lạ báo bạn sắp bước vào môi trường mới.",
    advice:
      "Hãy cởi mở với điều mới mẻ — người lạ hôm nay có thể là quý nhân ngày mai.",
    numbers: [14, 34, 54],
  },
  // ---------------- SỰ KIỆN & HÀNH ĐỘNG ----------------
  {
    slug: "mo-thay-bay",
    title: "Mơ thấy mình biết bay",
    keywords: ["bay", "biết bay", "bay lượn", "bay trên trời", "tung cánh"],
    category: "su-kien",
    omen: "tot",
    summary: "Tung cánh bay cao là giấc mơ đẹp nhất của tự do — khát vọng của bạn sắp thành hiện thực.",
    meaning:
      "Bay lượn là giấc mơ phổ biến và được yêu thích nhất. Bay cao, bay xa một cách tự tại là điềm đại cát: bạn sắp vượt qua mọi giới hạn, đạt được tự do và thành công mong ước. Bay càng cao, càng xa thì thành công càng lớn. Bay chập chờn, sợ rơi thì bạn vẫn còn chút e ngại — hãy tin vào đôi cánh của mình hơn nữa.",
    advice:
      "Đừng để ai 'cắt cánh' ước mơ của bạn. Hãy bay cao, bay xa như trong giấc mơ đêm qua.",
    numbers: [21, 61, 81],
  },
  {
    slug: "mo-thay-te-nga",
    title: "Mơ thấy té ngã",
    keywords: ["té ngã", "te nga", "rơi", "rơi xuống", "ngã", "rơi từ trên cao", "sảy chân"],
    category: "su-kien",
    omen: "xau",
    summary: "Rơi tự do trong mơ là cảm giác mất kiểm soát — điềm cần xem lại những gì đang 'lỏng tay'.",
    meaning:
      "Mơ thấy rơi từ trên cao xuống, té ngã là điềm bạn đang cảm thấy mất kiểm soát trong một lĩnh vực nào đó: công việc bấp bênh, tình cảm lung lay hay tài chính bất ổn. Rơi mà tỉnh giấc trước khi chạm đất là điềm may — nguy hiểm chỉ là hú vía. Rơi xuống nước êm đềm thì nhẹ nhàng hơn: chỉ là thay đổi môi trường.",
    advice:
      "Hãy 'nắm chặt tay lái' cuộc đời: sắp xếp lại công việc, đừng ôm đồm quá nhiều cùng lúc.",
    numbers: [3, 13, 33],
  },
  {
    slug: "mo-thay-chay",
    title: "Mơ thấy chạy",
    keywords: ["chạy", "chay bo", "chạy bộ", "chạy nhanh", "chạy marathon"],
    category: "su-kien",
    omen: "trung-tinh",
    summary: "Chạy trong mơ là hình ảnh của nỗ lực — bạn đang dốc sức vì mục tiêu nào đó.",
    meaning:
      "Chạy về phía trước một cách hăng hái là điềm tốt: bạn đang nỗ lực đúng hướng và sẽ sớm về đích. Chạy mà không đến đích, chạy tại chỗ báo cảm giác bế tắc — cần xem lại phương pháp. Chạy cùng đồng đội là điềm được hỗ trợ. Chạy trốn thì xem thêm điềm 'bị rượt đuổi'.",
    advice:
      "Kiên trì rất đáng quý, nhưng đừng quên kiểm tra xem mình có đang chạy đúng hướng không.",
    numbers: [8, 28, 48],
  },
  {
    slug: "mo-thay-boi",
    title: "Mơ thấy bơi",
    keywords: ["bơi", "boi loi", "bơi lội", "tắm sông", "bơi biển"],
    category: "su-kien",
    omen: "tot",
    summary: "Bơi lội thuần thục trong làn nước là điềm bạn đang làm chủ cảm xúc và vượt qua thử thách.",
    meaning:
      "Nước tượng trưng cho cảm xúc. Bơi giỏi, bơi xa trong nước trong là điềm bạn đang kiểm soát tốt cảm xúc, vượt qua khó khăn một cách uyển chuyển. Bơi qua sông lớn báo chinh phục được thử thách lớn. Sắp chìm, uống nước thì bạn đang quá tải — cần nghỉ ngơi và tìm phao cứu sinh (sự giúp đỡ).",
    advice:
      "Hãy tin vào khả năng 'bơi' của mình — bạn mạnh mẽ hơn những con sóng đang đối mặt.",
    numbers: [16, 36, 56],
  },
  {
    slug: "mo-thay-lai-xe",
    title: "Mơ thấy lái xe",
    keywords: ["lái xe", "lai xe", "cầm lái", "xe hơi", "đi xe", "lái ô tô"],
    category: "su-kien",
    omen: "trung-tinh",
    summary: "Vô lăng trong tay ai, cuộc đời đi về đâu — giấc mơ phản ánh mức độ làm chủ cuộc sống của bạn.",
    meaning:
      "Lái xe vững vàng trên đường đẹp là điềm bạn đang làm chủ cuộc đời, mọi việc theo đúng lộ trình. Xe mất lái, phanh hỏng báo bạn đang mất kiểm soát, cần chậm lại. Ngồi ghế phụ để người khác lái thì có thể bạn đang phó mặc cuộc đời cho người khác quyết định. Xe hết xăng giữa đường nhắc bạn cần nạp lại năng lượng.",
    advice:
      "Hãy là người cầm lái cuộc đời mình — đừng để ai khác quyết định hướng đi thay bạn.",
    numbers: [12, 32, 52],
  },
  {
    slug: "mo-thay-tai-nan",
    title: "Mơ thấy tai nạn",
    keywords: ["tai nạn", "tai nan", "tai nạn xe", "đâm xe", "tai nạn giao thông"],
    category: "su-kien",
    omen: "xau",
    summary: "Tai nạn trong mơ là hồi chuông cảnh báo — hãy chậm lại và cẩn trọng hơn trong thời gian tới.",
    meaning:
      "Mơ thấy tai nạn giao thông, đâm xe thường là lời cảnh báo từ tiềm thức: bạn đang đi quá nhanh trong cuộc sống — quyết định vội vàng, làm việc cẩu thả. Thoát nạn trong gang tấc là điềm may 'hú vía', nhưng cũng là lời nhắc không nên chủ quan. Chứng kiến tai nạn của người khác thì nên quan tâm, giúp đỡ người xung quanh nhiều hơn.",
    advice:
      "Hãy lái xe cẩn thận ngoài đời thực và đừng vội vàng trong các quyết định quan trọng sắp tới.",
    numbers: [7, 17, 37],
  },
  {
    slug: "mo-thay-di-thi",
    title: "Mơ thấy đi thi",
    keywords: ["đi thi", "di thi", "thi cử", "thi trượt", "phòng thi", "làm bài thi"],
    category: "su-kien",
    omen: "trung-tinh",
    summary: "Giấc mơ 'kinh điển' của sĩ tử — phản ánh áp lực thử thách, nhưng thi đỗ trong mơ là điềm tốt.",
    meaning:
      "Mơ thấy đi thi, làm bài là điềm bạn đang đối mặt với thử thách, đánh giá quan trọng ngoài đời. Thi đỗ, làm bài tốt trong mơ là điềm tự tin — bạn đã chuẩn bị đủ và sẽ thành công. Thi trượt, quên bài, đến muộn phản ánh nỗi lo thất bại — nhưng đa phần chỉ là áp lực tâm lý, không phải điềm gở thực sự. Dân gian còn nói 'thi trượt trong mơ thì đỗ ngoài đời'.",
    advice:
      "Hãy biến lo lắng thành động lực ôn luyện. Sự chuẩn bị kỹ lưỡng là 'bùa may mắn' tốt nhất.",
    numbers: [26, 46, 66],
  },
  {
    slug: "mo-thay-trung-so",
    title: "Mơ thấy trúng số",
    keywords: ["trúng số", "trung so", "trúng độc đắc", "vé số", "trúng thưởng", "xổ số"],
    category: "su-kien",
    omen: "tot",
    summary: "Trúng số trong mơ là điềm vận may tài lộc đang gõ cửa — nhưng đừng vội 'tất tay' nhé!",
    meaning:
      "Mơ thấy mình trúng số độc đắc, nhận giải thưởng lớn là điềm tài lộc sắp đến — có thể là khoản thu bất ngờ, tăng lương, hoặc cơ hội làm ăn tốt. Tuy nhiên, dân gian cũng nhắc: mơ trúng số chưa chắc đã trúng ngoài đời, đừng vì giấc mơ mà đổ hết tiền vào cờ bạc. Hãy xem đây là điềm khích lệ để nắm bắt cơ hội làm ăn chính đáng.",
    advice:
      "Vận may đang mỉm cười — nhưng hãy để may mắn đến từ nỗ lực và cơ hội thực tế, không phải đỏ đen.",
    numbers: [11, 22, 88],
  },
  {
    slug: "mo-thay-nhat-duoc-tien",
    title: "Mơ thấy nhặt được tiền",
    keywords: ["nhặt tiền", "nhat tien", "nhặt được tiền", "tiền rơi", "lượm tiền"],
    category: "su-kien",
    omen: "tot",
    summary: "Nhặt được tiền trong mơ là điềm lộc bất ngờ — sắp có khoản thu ngoài dự kiến.",
    meaning:
      "Nhặt được tiền, vàng trên đường trong mơ là điềm tài lộc bất ngờ: có thể được thưởng, được cho, hoặc công việc phát sinh thêm thu nhập. Nhặt được càng nhiều thì lộc càng lớn. Tiền sạch, tiền mới là điềm tốt; tiền rách, tiền bẩn thì nên cẩn thận kẻo 'của thiên trả địa'. Trả lại tiền nhặt được trong mơ là điềm phúc đức dày.",
    advice:
      "Hãy sẵn sàng đón nhận cơ hội tài chính bất ngờ — và nhớ chia sẻ may mắn với người khó khăn hơn.",
    numbers: [1, 76, 67],
  },
  {
    slug: "mo-thay-mat-tien",
    title: "Mơ thấy mất tiền",
    keywords: ["mất tiền", "mat tien", "mất ví", "mất của", "rơi tiền"],
    category: "su-kien",
    omen: "xau",
    summary: "Mất tiền trong mơ là điềm hao tài — cần thắt chặt chi tiêu và cẩn thận cạm bẫy.",
    meaning:
      "Mơ thấy mất ví, rơi tiền, bị lừa mất tiền là lời cảnh báo về hao tài tốn của: có thể sắp có khoản chi lớn bất ngờ, hoặc ai đó đang có ý định lợi dụng bạn về tiền bạc. Tìm lại được tiền trong mơ là điềm tốt — thiệt hại sẽ được khắc phục. Đây là lúc nên rà soát lại tài chính cá nhân.",
    advice:
      "Hãy cẩn thận với các lời mời đầu tư, cho vay mượn trong thời gian tới. 'Cẩn tắc vô ưu'.",
    numbers: [3, 23, 43],
  },
  {
    slug: "mo-thay-lac-duong",
    title: "Mơ thấy lạc đường",
    keywords: ["lạc đường", "lac duong", "lạc lối", "không tìm được đường", "đi lạc"],
    category: "su-kien",
    omen: "xau",
    summary: "Lạc đường trong mơ là hình ảnh của sự mất phương hướng ngoài đời thực.",
    meaning:
      "Đi lạc trong rừng sâu, thành phố lạ hay mê cung trong mơ phản ánh bạn đang mất phương hướng: không biết nên chọn con đường nào trong sự nghiệp, tình cảm hay cuộc sống. Tìm được đường ra là điềm tốt — bạn sẽ sớm tìm ra lối đi. Được người dẫn đường báo sắp gặp quý nhân chỉ lối. Hãy dừng lại, hít thở và nhìn lại bản đồ cuộc đời mình.",
    advice:
      "Đừng sợ thừa nhận mình đang lạc — chỉ khi dừng lại, bạn mới nhìn rõ đường về.",
    numbers: [7, 27, 47],
  },
  {
    slug: "mo-thay-leo-nui",
    title: "Mơ thấy leo núi",
    keywords: ["leo núi", "leo nui", "chinh phục", "trèo đèo", "lên đỉnh"],
    category: "su-kien",
    omen: "tot",
    summary: "Hành trình leo núi trong mơ chính là hành trình chinh phục mục tiêu ngoài đời.",
    meaning:
      "Leo núi là biểu tượng của sự nỗ lực vươn lên. Leo lên đến đỉnh thành công là điềm đại cát — mục tiêu lớn sắp thành hiện thực. Leo dở dang, mệt mỏi thì bạn đang gặp khó khăn nhưng đừng bỏ cuộc, đỉnh núi vẫn ở phía trước. Leo cùng đồng đội báo sự nghiệp có người đồng hành tốt. Ngã xuống khi leo thì cần củng cố lại nền tảng.",
    advice:
      "'Đường đi khó, không khó vì ngăn sông cách núi, mà khó vì lòng người ngại núi e sông' — cứ bước tiếp!",
    numbers: [19, 59, 79],
  },
  {
    slug: "mo-thay-du-lich",
    title: "Mơ thấy đi du lịch",
    keywords: ["du lịch", "du lich", "đi chơi xa", "phượt", "khám phá"],
    category: "su-kien",
    omen: "tot",
    summary: "Xách ba lô lên đường trong mơ là điềm mở rộng tầm nhìn — cơ hội mới đang chờ ở chân trời mới.",
    meaning:
      "Du lịch tượng trưng cho sự khám phá, mở rộng chân trời. Mơ thấy đi du lịch vui vẻ là điềm bạn sắp có cơ hội mới: công tác xa, học hỏi điều mới, hoặc đơn giản là cần nghỉ ngơi. Đi du lịch một mình báo sự độc lập, tự tin; đi cùng người thương báo tình cảm thêm gắn bó. Lạc đường khi du lịch thì xem thêm điềm 'lạc đường'.",
    advice:
      "Đôi khi cần 'đi để trở về' — một chuyến đi có thể mang lại góc nhìn hoàn toàn mới cho cuộc sống.",
    numbers: [14, 34, 54],
  },
  {
    slug: "mo-thay-chuyen-nha",
    title: "Mơ thấy chuyển nhà",
    keywords: ["chuyển nhà", "chuyen nha", "dọn nhà", "nhà mới", "chuyển chỗ ở"],
    category: "su-kien",
    omen: "trung-tinh",
    summary: "Dọn đến nhà mới là điềm thay đổi lớn — tốt hay xấu tùy thuộc ngôi nhà trong mơ.",
    meaning:
      "Chuyển nhà trong mơ tượng trưng cho sự thay đổi môi trường sống, công việc hay lối sống. Chuyển đến nhà đẹp, khang trang là điềm thăng tiến, cuộc sống nâng tầm. Chuyển đến nhà tồi tàn, chật chội thì nên cẩn thận với quyết định thay đổi sắp tới. Dọn nhà vất vả báo giai đoạn chuyển tiếp sẽ có chút gian nan nhưng xứng đáng.",
    advice:
      "Thay đổi là cơ hội — nhưng hãy chuẩn bị kỹ càng trước khi 'dọn nhà' sang trang mới.",
    numbers: [14, 44, 74],
  },
  {
    slug: "mo-thay-xay-nha",
    title: "Mơ thấy xây nhà",
    keywords: ["xây nhà", "xay nha", "làm nhà", "xây dựng", "cất nhà", "đổ móng"],
    category: "su-kien",
    omen: "tot",
    summary: "'An cư lạc nghiệp' — xây nhà trong mơ là điềm dựng xây sự nghiệp vững chắc.",
    meaning:
      "Ngôi nhà là biểu tượng của sự ổn định, tổ ấm. Mơ thấy xây nhà, đổ móng, lợp mái là điềm bạn đang xây dựng nền tảng vững chắc cho tương lai: sự nghiệp thăng tiến, gia đình ổn định. Nhà xây càng cao, càng đẹp thì thành công càng lớn. Nhà xây dở dang thì cần kiên trì hoàn thiện những gì đang làm.",
    advice:
      "Hãy tiếp tục 'xây' từng viên gạch mỗi ngày — ngôi nhà thành công không thể hoàn thành trong một đêm.",
    numbers: [11, 51, 91],
  },
  {
    slug: "mo-thay-nau-an",
    title: "Mơ thấy nấu ăn",
    keywords: ["nấu ăn", "nau an", "nấu cơm", "vào bếp", "nấu nướng"],
    category: "su-kien",
    omen: "tot",
    summary: "Bếp lửa hồng, mâm cơm đầy là điềm vun vén — gia đình êm ấm, no đủ.",
    meaning:
      "Bếp núc trong văn hóa Việt là trái tim của ngôi nhà. Mơ thấy nấu ăn ngon, bếp lửa hồng là điềm gia đình hòa thuận, ấm no. Nấu cỗ linh đình báo sắp có hỷ sự, tiệc tùng. Nấu ăn bị cháy, khê thì nên chú ý 'lửa' trong nhà — có thể có mâu thuẫn nhỏ cần hòa giải sớm. Được người khác nấu cho ăn là điềm được quan tâm, chăm sóc.",
    advice:
      "Hạnh phúc đôi khi đơn giản là một mâm cơm đầy và những người thân yêu quây quần.",
    numbers: [20, 40, 60],
  },
  {
    slug: "mo-thay-an-tiec",
    title: "Mơ thấy ăn tiệc",
    keywords: ["ăn tiệc", "an tiec", "cỗ bàn", "liên hoan", "ăn uống", "mâm cỗ"],
    category: "su-kien",
    omen: "tot",
    summary: "Mâm cao cỗ đầy là điềm sung túc — no đủ và sắp có chuyện vui để ăn mừng.",
    meaning:
      "Mơ thấy dự tiệc linh đình, mâm cỗ đầy ắp là điềm sung túc, đủ đầy: công việc thuận lợi, tiền bạc rủng rỉnh. Ăn uống vui vẻ cùng người thân báo gia đình sắp có hỷ sự để sum họp. Ăn một mình buồn bã thì dù vật chất đủ đầy, tinh thần bạn đang cần được sẻ chia. Cỗ bàn thịnh soạn còn báo sắp được mời dự tiệc vui thật.",
    advice:
      "Hãy biết tận hưởng thành quả và chia sẻ niềm vui — hạnh phúc nhân đôi khi được sẻ chia.",
    numbers: [28, 48, 68],
  },
  {
    slug: "mo-thay-di-cho",
    title: "Mơ thấy đi chợ",
    keywords: ["đi chợ", "di cho", "chợ", "mua bán", "chợ đông"],
    category: "su-kien",
    omen: "tot",
    summary: "Chợ đông vui, hàng hóa đầy ắp là điềm sinh hoạt đủ đầy, buôn bán phát đạt.",
    meaning:
      "Chợ là nơi giao thương, sinh hoạt của người Việt. Mơ thấy chợ đông đúc, mua được nhiều đồ ngon là điềm cuộc sống đủ đầy, làm ăn phát đạt. Người buôn bán mơ thấy chợ đông là điềm 'buôn may bán đắt'. Chợ vắng, chợ tan thì nên cẩn thận chuyện làm ăn ảm đạm tạm thời — nhưng chợ nào rồi cũng đông trở lại.",
    advice:
      "Hãy chăm chỉ như người đi chợ sớm — 'đi sớm' trong cơ hội thì luôn được hàng ngon giá tốt.",
    numbers: [13, 33, 53],
  },
  {
    slug: "mo-thay-hat",
    title: "Mơ thấy hát",
    keywords: ["hát", "hat ca", "ca hát", "hát karaoke", "biểu diễn"],
    category: "su-kien",
    omen: "tot",
    summary: "Tiếng hát vang xa là điềm tâm hồn bay bổng — niềm vui và tin tốt sắp đến.",
    meaning:
      "Ca hát là cách con người bày tỏ niềm vui. Mơ thấy mình hát hay, hát vang là điềm tâm trạng phơi phới, sắp có tin vui, được khen ngợi. Hát trước đám đông báo bạn sắp được tỏa sáng, thể hiện tài năng. Hát mà lạc giọng, quên lời thì đừng lo — chỉ là bạn hơi thiếu tự tin, hãy chuẩn bị kỹ hơn.",
    advice:
      "Hãy để tâm hồn được 'hát' — làm điều mình yêu thích sẽ thu hút năng lượng tích cực.",
    numbers: [18, 38, 58],
  },
  {
    slug: "mo-thay-cau-ca",
    title: "Mơ thấy câu cá",
    keywords: ["câu cá", "cau ca", "đi câu", "cần câu", "cá cắn câu"],
    category: "su-kien",
    omen: "tot",
    summary: "Người câu cá kiên nhẫn là biểu tượng của 'có công mài sắt' — thành quả đến với người biết chờ đợi.",
    meaning:
      "Câu cá đòi hỏi sự kiên nhẫn — và giấc mơ này khen ngợi đức tính đó ở bạn. Câu được cá to là điềm sắp gặt hái thành quả lớn sau thời gian chờ đợi. Ngồi câu lâu không được cá thì đừng nản — 'cá lớn' cần thời gian, hãy kiên trì thêm. Cần câu gãy thì nên xem lại công cụ, phương pháp làm việc.",
    advice:
      "Kiên nhẫn là chìa khóa. Cơ hội lớn thường đến với người đủ bình tĩnh để chờ đợi.",
    numbers: [19, 39, 79],
  },
  {
    slug: "mo-thay-trong-cay",
    title: "Mơ thấy trồng cây",
    keywords: ["trồng cây", "trong cay", "gieo hạt", "trồng rau", "làm vườn"],
    category: "su-kien",
    omen: "tot",
    summary: "Gieo hạt hôm nay, gặt quả ngày mai — điềm đầu tư cho tương lai sẽ sinh lời.",
    meaning:
      "Trồng cây, gieo hạt trong mơ là điềm của sự đầu tư lâu dài: bạn đang gieo những hạt giống tốt cho tương lai — có thể là học hành, sự nghiệp hay mối quan hệ. Cây lên xanh tốt báo đầu tư đúng hướng. Cây héo thì cần chăm sóc lại kế hoạch đang bỏ dở. Mùa màng bội thu trong mơ là điềm đại cát cho người làm ăn.",
    advice:
      "'Muốn ăn quả phải trồng cây' — hãy bắt đầu gieo hạt ngay hôm nay, đừng chờ đợi nữa.",
    numbers: [15, 35, 55],
  },
  {
    slug: "mo-thay-nhay-mua",
    title: "Mơ thấy nhảy múa",
    keywords: ["nhảy múa", "nhay mua", "khiêu vũ", "múa", "nhảy"],
    category: "su-kien",
    omen: "tot",
    summary: "Điệu nhảy uyển chuyển là điềm tự do thể hiện bản thân — niềm vui đang lan tỏa.",
    meaning:
      "Nhảy múa là ngôn ngữ của niềm vui và sự tự do. Mơ thấy mình nhảy múa say sưa là điềm tâm hồn đang bay bổng, sắp có chuyện vui lớn để ăn mừng. Nhảy cùng người thương báo tình cảm thăng hoa. Nhảy trên sân khấu báo bạn sắp được công nhận, tỏa sáng. Vấp ngã khi nhảy thì chỉ là lời nhắc đừng quá phấn khích mà quên thận trọng.",
    advice:
      "Hãy cho phép mình được vui — cuộc sống cần những điệu nhảy ngẫu hứng.",
    numbers: [12, 42, 72],
  },
  // ---------------- ĐỒ VẬT ----------------
  {
    slug: "mo-thay-tien",
    title: "Mơ thấy tiền",
    keywords: ["tiền", "tien bac", "tiền giấy", "tiền xu", "tiền đô", "tiền polymer"],
    category: "do-vat",
    omen: "tot",
    summary: "Tiền bạc trong mơ là điềm tài lộc — nhưng tiền giấy và tiền xu có ý nghĩa khác nhau.",
    meaning:
      "Mơ thấy tiền giấy, đếm tiền là điềm tài lộc hanh thông, sắp có khoản thu tốt. Nhặt được tiền thì xem thêm điềm 'nhặt được tiền'. Tiền xu lẻ theo dân gian lại báo chuyện lặt vặt gây phiền — 'tiền xu' thì nhỏ nhặt. Cho tiền người khác trong mơ là điềm phúc đức; được cho tiền là điềm quý nhân giúp đỡ về tài chính.",
    advice:
      "Tài lộc đang đến — nhưng hãy quản lý khôn ngoan, 'tiền vào như nước' cũng cần biết giữ.",
    numbers: [62, 82],
  },
  {
    slug: "mo-thay-vang",
    title: "Mơ thấy vàng",
    keywords: ["vàng", "vang bac", "vàng miếng", "nhẫn vàng", "dây chuyền vàng", "vàng bạc"],
    category: "do-vat",
    omen: "tot",
    summary: "Vàng ròng lấp lánh là điềm giàu sang phú quý — tài sản, địa vị sắp tăng.",
    meaning:
      "Vàng là biểu tượng của sự giàu sang, bền vững. Mơ thấy vàng miếng, đeo vàng là điềm tài lộc lớn, có thể là thăng chức tăng lương, đầu tư sinh lời. Nhặt được vàng là điềm đại phát. Vàng giả, vàng mất màu thì nên cẩn thận — có thứ tưởng quý giá nhưng thực ra không đáng tin, kể cả trong làm ăn lẫn tình cảm.",
    advice:
      "Hãy đầu tư vào những giá trị 'vàng thật' — tri thức, sức khỏe và uy tín của bản thân.",
    numbers: [37, 77],
  },
  {
    slug: "mo-thay-nha-cua",
    title: "Mơ thấy nhà cửa",
    keywords: ["nhà", "nha cua", "nhà mới", "nhà to", "biệt thự", "tổ ấm"],
    category: "do-vat",
    omen: "tot",
    summary: "Ngôi nhà trong mơ là hình ảnh của tâm hồn và gia đạo — nhà đẹp là điềm an cư lạc nghiệp.",
    meaning:
      "Nhà cửa tượng trưng cho bản thân và gia đình bạn. Mơ thấy nhà to đẹp, khang trang là điềm gia đạo hưng thịnh, sự nghiệp ổn định. Nhà mới báo khởi đầu mới tốt đẹp. Nhà dột, nhà sập thì cần quan tâm đến tổ ấm — có thể có mâu thuẫn cần hòa giải hoặc sức khỏe người thân cần chăm sóc. Dọn dẹp nhà cửa trong mơ là điềm sắp xếp lại cuộc sống gọn gàng.",
    advice:
      "'Nhà sạch thì mát, bát sạch ngon cơm' — hãy vun vén tổ ấm từ những điều nhỏ nhất.",
    numbers: [11, 51, 91],
  },
  {
    slug: "mo-thay-xe-hoi",
    title: "Mơ thấy xe hơi",
    keywords: ["xe hơi", "xe hoi", "ô tô", "xe mới", "lái ô tô", "mua xe"],
    category: "do-vat",
    omen: "tot",
    summary: "Xe hơi sang trọng là biểu tượng của địa vị và sự tiến lên — điềm thăng tiến.",
    meaning:
      "Xe hơi trong mơ tượng trưng cho địa vị xã hội và tốc độ tiến thân. Mua xe mới, đi xe sang là điềm thăng quan tiến chức, làm ăn phát đạt. Xe hỏng giữa đường báo kế hoạch gặp trục trặc tạm thời — cần kiểm tra lại. Xe mất cắp thì cẩn thận kẻo mất cơ hội hoặc bị 'cướp công'.",
    advice:
      "Hãy 'lái' sự nghiệp của mình một cách vững vàng — thành công đang ở phía trước.",
    numbers: [28, 48, 68],
  },
  {
    slug: "mo-thay-dien-thoai",
    title: "Mơ thấy điện thoại",
    keywords: ["điện thoại", "dien thoai", "smartphone", "gọi điện", "mất điện thoại", "điện thoại vỡ"],
    category: "do-vat",
    omen: "trung-tinh",
    summary: "Điện thoại là cầu nối liên lạc — điềm báo tin tức sắp đến, hoặc bạn đang 'mất kết nối'.",
    meaning:
      "Mơ thấy nghe điện thoại, nhận cuộc gọi là điềm sắp có tin tức quan trọng — tốt hay xấu tùy giọng điệu trong mơ. Mất điện thoại, điện thoại vỡ báo bạn đang cảm thấy mất kết nối với ai đó, hoặc lo sợ bỏ lỡ điều quan trọng. Điện thoại hết pin nhắc bạn cần nạp lại năng lượng, nghỉ ngơi.",
    advice:
      "Hãy chủ động liên lạc với người bạn đang nghĩ đến — đừng để 'mất sóng' trong mối quan hệ.",
    numbers: [9, 29, 49],
  },
  {
    slug: "mo-thay-dong-ho",
    title: "Mơ thấy đồng hồ",
    keywords: ["đồng hồ", "dong ho", "đồng hồ đeo tay", "kim đồng hồ", "đồng hồ chết"],
    category: "do-vat",
    omen: "trung-tinh",
    summary: "Đồng hồ nhắc về thời gian — có việc gì đó đang đến hạn, đừng chần chừ nữa.",
    meaning:
      "Đồng hồ trong mơ là lời nhắc của tiềm thức về thời gian. Đồng hồ chạy đúng giờ báo bạn đang đi đúng tiến độ. Đồng hồ chết, kim ngừng chạy nhắc có việc gì đó đang bị trì hoãn quá lâu — đã đến lúc hành động. Được tặng đồng hồ là điềm quý trọng thời gian, sắp có cơ hội quý giá. Vỡ đồng hồ thì nên cẩn thận kẻo lỡ hẹn quan trọng.",
    advice:
      "Thời gian là vàng bạc — đừng để 'kim đồng hồ' của cơ hội trôi qua vô ích.",
    numbers: [12, 52, 72],
  },
  {
    slug: "mo-thay-guong",
    title: "Mơ thấy gương",
    keywords: ["gương", "guong soi", "soi gương", "gương vỡ", "kính"],
    category: "do-vat",
    omen: "trung-tinh",
    summary: "Gương soi là hình ảnh của sự tự nhìn nhận — đã đến lúc thành thật với chính mình.",
    meaning:
      "Soi gương trong mơ là lời mời tự phản chiếu: bạn đang nhìn nhận bản thân như thế nào? Gương sáng, thấy mình rạng rỡ là điềm tự tin, sắp tỏa sáng. Gương mờ, gương vỡ báo hình ảnh bản thân đang rạn nứt — có thể bạn đang tự ti hoặc bị hiểu lầm. Vỡ gương theo dân gian là điềm xui cần cẩn thận, nhưng cũng là cơ hội 'vỡ để làm lại'.",
    advice:
      "Hãy dành thời gian 'soi' lại mình — hiểu mình là bước đầu để thay đổi cuộc đời.",
    numbers: [18, 38, 58],
  },
  {
    slug: "mo-thay-chia-khoa",
    title: "Mơ thấy chìa khóa",
    keywords: ["chìa khóa", "chia khoa", "chìa khoá", "khóa", "mở khóa"],
    category: "do-vat",
    omen: "tot",
    summary: "Chìa khóa trong tay là điềm mở ra cơ hội — cánh cửa thành công sắp được mở.",
    meaning:
      "Chìa khóa tượng trưng cho giải pháp và cơ hội. Nhặt được chìa khóa, cầm chìa khóa vàng trong mơ là điềm bạn sắp tìm ra lời giải cho vấn đề nan giải, hoặc cơ hội lớn sắp mở ra. Mở được cánh cửa khóa kín báo đột phá thành công. Mất chìa khóa thì đừng lo — chỉ là bạn đang bế tắc tạm thời, hãy tìm 'chìa khóa' khác.",
    advice:
      "Cơ hội thường ngụy trang dưới dạng khó khăn — hãy kiên nhẫn tìm đúng 'chìa khóa'.",
    numbers: [8, 28, 68],
  },
  {
    slug: "mo-thay-quan-ao-moi",
    title: "Mơ thấy quần áo mới",
    keywords: ["quần áo mới", "quan ao", "áo mới", "mua quần áo", "thay đồ", "áo dài"],
    category: "do-vat",
    omen: "tot",
    summary: "'Người đẹp vì lụa' — quần áo mới trong mơ là điềm thay đổi diện mạo, vận may mới.",
    meaning:
      "Quần áo tượng trưng cho hình ảnh bên ngoài và địa vị. Mặc quần áo mới đẹp là điềm vận may mới, được người khác nhìn nhận tích cực, có thể là thăng chức hoặc tin vui. Áo dài thướt tha báo duyên dáng, được yêu mến. Quần áo rách, bẩn thì nên chú ý hình ảnh, lời ăn tiếng nói kẻo mất điểm trong mắt người khác.",
    advice:
      "Đôi khi chỉ cần 'thay áo mới' cho tư duy, cuộc đời bạn sẽ khoác lên diện mạo hoàn toàn khác.",
    numbers: [9, 19, 29],
  },
  {
    slug: "mo-thay-giay",
    title: "Mơ thấy giày",
    keywords: ["giày", "giay dep", "giày mới", "đi giày", "mất giày", "dép"],
    category: "do-vat",
    omen: "trung-tinh",
    summary: "Giày là người bạn đồng hành của mọi hành trình — điềm báo về con đường bạn đang đi.",
    meaning:
      "Giày dép tượng trưng cho hành trình cuộc đời. Đi giày vừa chân, êm ái là điềm con đường đang đi phù hợp, mọi việc thuận lợi. Giày chật, giày đau chân báo bạn đang gượng ép mình vào điều không phù hợp — nên xem lại. Mất giày, đi chân đất thì cẩn thận kẻo 'mất phương hướng' hoặc bị lợi dụng. Được tặng giày mới là điềm sắp có hành trình mới tốt đẹp.",
    advice:
      "Hãy chọn 'đôi giày' vừa với mình — con đường phù hợp quan trọng hơn con đường hào nhoáng.",
    numbers: [13, 33, 53],
  },
  {
    slug: "mo-thay-nhan",
    title: "Mơ thấy nhẫn",
    keywords: ["nhẫn", "nhan cuoi", "nhẫn cưới", "đeo nhẫn", "nhẫn vàng", "cầu hôn"],
    category: "do-vat",
    omen: "tot",
    summary: "Chiếc nhẫn tròn không đầu không cuối là biểu tượng của cam kết vĩnh cửu — điềm hỷ tình duyên.",
    meaning:
      "Nhẫn, đặc biệt là nhẫn cưới, là biểu tượng của sự cam kết trọn đời. Được tặng nhẫn, đeo nhẫn trong mơ là điềm tình duyên chín muồi, sắp có hỷ sự. Nhẫn vàng lấp lánh báo hôn nhân hạnh phúc, sung túc. Mất nhẫn, nhẫn gãy thì nên vun đắp lại tình cảm — có thể mối quan hệ đang rạn nứt cần hàn gắn kịp thời.",
    advice:
      "Tình yêu như chiếc nhẫn — cần được nâng niu mỗi ngày mới giữ được vẻ sáng bóng.",
    numbers: [12, 42, 72],
  },
  {
    slug: "mo-thay-sach",
    title: "Mơ thấy sách",
    keywords: ["sách", "sach vo", "đọc sách", "sách vở", "thư viện", "học bài"],
    category: "do-vat",
    omen: "tot",
    summary: "Sách là kho tàng tri thức — điềm học hành tiến bộ, trí tuệ khai mở.",
    meaning:
      "Mơ thấy đọc sách, sách vở là điềm tốt cho sĩ tử và người cầu tiến: học hành đỗ đạt, công việc cần trí tuệ sẽ thành công. Sách mở ra trang mới báo bạn sắp học được bài học quý giá hoặc khám phá điều mới mẻ. Tặng sách cho ai là điềm chia sẻ tri thức — 'cho đi kiến thức là còn mãi'. Thư viện đầy sách báo kho tàng cơ hội tri thức.",
    advice:
      "'Học, học nữa, học mãi' — đầu tư vào tri thức là khoản đầu tư sinh lời cao nhất.",
    numbers: [11, 31, 51],
  },
  {
    slug: "mo-thay-dao-keo",
    title: "Mơ thấy dao kéo",
    keywords: ["dao", "kéo", "dao keo", "dao sắc", "bị dao đâm", "cầm dao"],
    category: "do-vat",
    omen: "xau",
    summary: "Dao kéo sắc bén là điềm xung đột, cắt đứt — cần khéo léo để không 'đứt tay'.",
    meaning:
      "Dao kéo tượng trưng cho sự cắt đứt, chia ly và xung đột. Mơ thấy dao sắc, bị dao cứa là điềm cần cẩn thận lời nói sắc bén làm tổn thương người khác, hoặc có kẻ muốn 'cắt đứt' quan hệ với bạn. Dao gỉ, dao cùn thì nhẹ hơn — chỉ là mâu thuẫn nhỏ. Dùng dao làm bếp bình thường thì không sao, đó là sinh hoạt đời thường.",
    advice:
      "Hãy 'mài' sự khéo léo thay vì mài sự sắc bén — lời nói nhẹ nhàng giải quyết được nhiều việc hơn.",
    numbers: [7, 27, 47],
  },
  {
    slug: "mo-thay-nen",
    title: "Mơ thấy nến",
    keywords: ["nến", "den cay", "đèn", "ánh nến", "thắp nến", "nến cháy"],
    category: "do-vat",
    omen: "tot",
    summary: "Ngọn nến lung linh trong đêm tối là biểu tượng của hy vọng — ánh sáng cuối đường hầm.",
    meaning:
      "Nến, đèn là nguồn sáng xua tan bóng tối. Mơ thấy nến cháy sáng, đèn lồng rực rỡ là điềm hy vọng — dù đang khó khăn, ánh sáng cuối đường hầm đã hiện ra. Thắp nến trong mơ báo bạn sắp tìm ra hướng đi, hoặc việc thiện bạn làm sẽ được đền đáp. Nến tắt ngúm thì đừng nản — chỉ là cần thêm chút kiên nhẫn và niềm tin.",
    advice:
      "Hãy là ngọn nến cho chính mình trước — khi bạn sáng lên, bóng tối tự khắc lùi xa.",
    numbers: [8, 28, 48],
  },
  {
    slug: "mo-thay-cau-thang",
    title: "Mơ thấy cầu thang",
    keywords: ["cầu thang", "cau thang", "leo cầu thang", "bậc thang", "thang máy"],
    category: "do-vat",
    omen: "tot",
    summary: "Từng bậc thang đi lên là hình ảnh của sự thăng tiến — cứ bước đều, đỉnh cao đang chờ.",
    meaning:
      "Cầu thang tượng trưng cho con đường thăng tiến từng bước vững chắc. Leo cầu thang lên cao trong mơ là điềm thăng quan tiến chức, sự nghiệp lên như diều gặp gió. Cầu thang rộng, đẹp báo con đường thênh thang. Cầu thang hẹp, tối hay gãy thì cần cẩn thận từng bước — thành công đến từ sự chắc chắn, không phải vội vàng.",
    advice:
      "Đừng mơ nhảy cóc — người leo từng bậc thang mới đứng vững được trên đỉnh cao.",
    numbers: [10, 30, 50],
  },
  {
    slug: "mo-thay-thuyen",
    title: "Mơ thấy thuyền",
    keywords: ["thuyền", "thuyen buom", "đò", "thuyền buồm", "chèo thuyền", "xuồng"],
    category: "do-vat",
    omen: "tot",
    summary: "'Thuận buồm xuôi gió' — thuyền ra khơi là điềm mọi việc hanh thông.",
    meaning:
      "Thuyền bè gắn với câu chúc 'thuận buồm xuôi gió'. Mơ thấy thuyền lướt sóng êm đềm, buồm căng gió là điềm công việc thuận lợi, làm ăn phát đạt. Qua sông bằng đò an toàn báo vượt qua khó khăn. Thuyền chìm, lật thuyền thì cần đề phòng rủi ro — nhưng người biết bơi (bản lĩnh) thì vẫn vào bờ an toàn.",
    advice:
      "Hãy căng buồm đón gió cơ hội — nhưng cũng nhớ kiểm tra 'con thuyền' của mình có chắc chắn không.",
    numbers: [16, 36, 56],
  },
  {
    slug: "mo-thay-vali",
    title: "Mơ thấy vali",
    keywords: ["vali", "hành lý", "va li", "xách vali", "đóng gói", "ba lô"],
    category: "do-vat",
    omen: "trung-tinh",
    summary: "Vali đóng gói là điềm chuẩn bị cho sự thay đổi — một hành trình mới đang chờ.",
    meaning:
      "Vali, hành lý tượng trưng cho sự chuẩn bị và những gánh nặng bạn đang mang theo. Xách vali lên đường trong mơ báo sắp có chuyến đi, thay đổi công việc hoặc môi trường sống. Vali nặng trĩu thì bạn đang mang quá nhiều gánh nặng — đã đến lúc buông bỏ bớt. Vali nhẹ nhàng, gọn gàng báo sự chuẩn bị chu đáo sẽ mang lại thành công.",
    advice:
      "Trước mỗi hành trình mới, hãy sắp xếp lại 'hành lý' cuộc đời — chỉ mang theo điều thực sự cần thiết.",
    numbers: [4, 24, 44],
  },
  {
    slug: "mo-thay-cua",
    title: "Mơ thấy cửa",
    keywords: ["cửa", "cua chinh", "cánh cửa", "mở cửa", "đóng cửa", "cửa sổ"],
    category: "do-vat",
    omen: "trung-tinh",
    summary: "Cánh cửa mở ra là cơ hội, khép lại là kết thúc — điềm báo tùy thuộc cánh cửa trong mơ.",
    meaning:
      "Cửa là ranh giới giữa cũ và mới. Mơ thấy cửa mở rộng chào đón là điềm cơ hội mới đang mở ra — hãy mạnh dạn bước qua. Cửa đóng kín, khóa chặt báo có trở ngại tạm thời hoặc bạn đang khép mình. Gõ cửa được mở là điềm nỗ lực sẽ được đền đáp. Cửa sổ mở báo tin vui từ xa; nhìn qua cửa sổ thấy cảnh đẹp là điềm hy vọng.",
    advice:
      "Khi một cánh cửa khép lại, đừng quên nhìn xung quanh — có thể cửa sổ cơ hội đang mở toang.",
    numbers: [5, 25, 45],
  },
];

// ================== HELPERS ==================

/** Bỏ dấu tiếng Việt để tìm kiếm không dấu */
export function removeDiacritics(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLowerCase();
}

export function getCategory(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

export function getDream(slug: string): DreamEntry | undefined {
  return DREAMS.find((d) => d.slug === slug);
}

/** Tìm kiếm giấc mơ theo từ khóa (hỗ trợ không dấu) */
export function searchDreams(query: string): DreamEntry[] {
  const q = removeDiacritics(query.trim());
  if (!q) return DREAMS;
  const terms = q.split(/\s+/);
  return DREAMS.filter((d) => {
    const haystack = removeDiacritics(
      [d.title, d.summary, d.meaning, ...d.keywords].join(" ")
    );
    return terms.every((t) => haystack.includes(t));
  });
}

/** Lọc theo danh mục và điềm báo */
export function filterDreams(categoryId?: string, omen?: Omen): DreamEntry[] {
  return DREAMS.filter(
    (d) =>
      (!categoryId || d.category === categoryId) &&
      (!omen || d.omen === omen)
  );
}

/** Giấc mơ liên quan (cùng danh mục hoặc cùng điềm) */
export function relatedDreams(dream: DreamEntry, count = 6): DreamEntry[] {
  const others = DREAMS.filter((d) => d.slug !== dream.slug);
  const sameCat = others.filter((d) => d.category === dream.category);
  const sameOmen = others.filter(
    (d) => d.category !== dream.category && d.omen === dream.omen
  );
  return [...sameCat, ...sameOmen].slice(0, count);
}

/** Giấc mơ ngẫu nhiên */
export function randomDream(): DreamEntry {
  return DREAMS[Math.floor(Math.random() * DREAMS.length)];
}

/** Tra cứu theo con số (sổ mơ) */
export function searchByNumber(num: number): DreamEntry[] {
  return DREAMS.filter((d) => d.numbers.includes(num));
}

/** Thống kê */
export function getStats() {
  return {
    total: DREAMS.length,
    tot: DREAMS.filter((d) => d.omen === "tot").length,
    xau: DREAMS.filter((d) => d.omen === "xau").length,
    trungTinh: DREAMS.filter((d) => d.omen === "trung-tinh").length,
    categories: CATEGORIES.length,
  };
}

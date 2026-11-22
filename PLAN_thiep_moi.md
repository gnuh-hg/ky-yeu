# PLAN: Web thiệp mời kỉ yếu — concept "Dải lụa line-art"

> File này là **nguồn sự thật duy nhất** giữa các session. Mọi session phải đọc file này trước khi làm và **cập nhật lại file này trước khi kết thúc** (xem mục 0).

**Cập nhật lần cuối:** Gnuh đổi yêu cầu sau S4 → plan thêm D27–D34, bảng 2b, câu hỏi mở Q1, GĐ8 (S5). **Chưa sửa dòng code nào** — 20/11/2026
**Tiến độ tổng:** S0–S4 code xong (GĐ7 test máy thật vẫn chờ Gnuh). Việc kế tiếp là S5/GĐ8: gỡ nút xác nhận + nút Bỏ qua, thêm số điện thoại, font theo ảnh mẫu, mobile gọn một trang. **Cần Gnuh trả lời Q1 (mục 2c) trước khi sửa dữ liệu**

> **Hiệu lực của yêu cầu mới (20/11/2026):** D27–D34 và GĐ8 **thay thế** mọi chỗ trong file này nói về nút "Bạn sẽ đến chứ?" + giữ xác nhận (GĐ5), nút "Bỏ qua", và bố cục mobile cuộn 3 màn. Những chỗ đó được giữ làm lịch sử và gắn nhãn **[hết hiệu lực]**; gặp mâu thuẫn thì D27–D34 thắng.

---

## 0. Quy tắc cho MỌI session (đọc trước khi làm)

1. Đọc toàn bộ file này và mọi file code đính kèm trước khi viết dòng code nào.
2. Chỉ làm đúng các giai đoạn được giao trong prompt của session. Chưa qua **cổng** thì không sang giai đoạn sau.
3. Trả lời tiếng Việt, phản biện thẳng nếu thấy điểm yếu hoặc mâu thuẫn. Sửa code **tối thiểu** (sửa đúng chỗ, không viết lại cả file) trừ khi bắt buộc và phải nói rõ lý do.
4. Gặp điều bất ngờ làm lệch plan thì **dừng lại báo cáo**, đề xuất điều chỉnh, chờ xác nhận. Không tự thêm bước ngoài plan.
5. **Cập nhật file này sau mỗi mốc lớn và chắc chắn trước khi hết ngữ cảnh**, gồm: bảng tiến độ (mục 1), tick checkbox (mục 6), quyết định mới (mục 2), số đo thật (mục 8), nhật ký session (mục 11), cập nhật dòng "Cập nhật lần cuối".
6. Cuối session: trả lại (a) file PLAN đã cập nhật, (b) toàn bộ file code đã sửa, (c) một câu "Việc tiếp theo là ...", (d) **nhắc Gnuh session sau cần gửi đúng những file nào** (theo bảng ở đầu mục 10; ghi rõ file nào KHÔNG cần gửi).
7. Mình (Gnuh) mới là người đo trên máy thật. Claude không tự bịa số FPS; chỉ ghi số mình báo.

---

## 1. Bảng tiến độ

Trạng thái: ⬜ chưa làm · 🟨 đang làm · ✅ xong · ⛔ bị chặn

| Session | Giai đoạn | Nội dung | Trạng thái | Kết quả / ghi chú |
|---|---|---|---|---|
| S0 | — | Lập plan, chốt câu hỏi mở | ✅ | Xong 19/11/2026 |
| S1 | GĐ0–1 | Dữ liệu giả + **Spike dải lụa cách B** + cổng hiệu năng | ✅ | Hiệu năng: Gnuh cho qua (D12), chưa đo Android. Thẩm mỹ: duyệt lại ở S2 |
| S2 | GĐ2–3 | Khung tĩnh, typography, bố cục mobile/desktop + Intro | ✅ | Gnuh duyệt thẩm mỹ + bố cục mobile/desktop. Font đã đổi sang Playfair Display (D18), Gnuh chưa xem lại. Converge chưa thử (D14) |
| S3 | GĐ4–5 | Countdown odometer + Nút xác nhận giữ + kiểm tra "độ trống" | ✅ | Gnuh test máy thật: không tràn màn desktop, nút giữ ổn, countdown ổn. G2 đóng, không thêm ô nhập tên (D26) |
| S4 | GĐ6–7 | Riêng desktop, hoàn thiện, test ma trận (+ tuỳ chọn: OG, gộp 1 file, RSVP) | 🟨 | GĐ6 code xong (D23–D24), GĐ7 rà soát tĩnh xong, **ma trận test máy thật chờ Gnuh** (nhật ký S4). Tuỳ chọn chưa làm |
| S5 | GĐ8 | Gỡ nút xác nhận + Bỏ qua; số điện thoại + dữ liệu theo ảnh mẫu; font theo ảnh; mobile một trang không cuộn | ⬜ | Plan viết xong 20/11/2026, chờ Gnuh trả lời Q1 rồi mở session. Chưa có dòng code nào |

Có thể gộp S3 + S4 nếu S1–S2 chạy nhanh. Không gộp S1 với các session sau vì S1 có cổng quyết định.

---

## 2. Quyết định đã chốt (Decision log)

| # | Quyết định | Nguồn |
|---|---|---|
| D1 | Concept: dải lụa line-art, nền tối, 20–40 đường vàng đồng, hiển thị tiếng Việt | Gnuh |
| D2 | Người mời là **một người**: Nguyễn Mạnh Hùng ("Nguyễn Thị Thuỷ" chỉ giữ làm chuỗi thử dấu phụ) | Gnuh |
| D3 | Trường: Trung học phổ thông Thạch Thất (viết tắt THPT Thạch Thất); lớp 12A01 | Gnuh |
| D4 | Ngày 29/11/2026 (Chủ nhật); giờ 10h30–12h | Gnuh |
| D5 | **Bỏ nhạc nền** | Gnuh |
| D6 | Làm bằng web thường (html/css/js), **test bằng localhost**, chưa cần host | Gnuh |
| D7 | Chuyển động dải lụa dùng **cách B** (requestAnimationFrame cập nhật thuộc tính `d`) | Gnuh |
| D8 | **[Phần "nút xác nhận" hết hiệu lực, D30]** Nút xác nhận: bản demo chỉ cần hiệu ứng. Chỉ thêm ô nhập tên + gửi dữ liệu **nếu bản hoàn thiện bị trống** (xem GĐ5, cổng "độ trống") | Gnuh |
| D9 | *(giả định của Claude, Gnuh sửa được)* Khi phát triển tách 3 file `index.html`, `style.css`, `app.js` (CONFIG ở đầu `app.js`) để mỗi session chỉ đọc/sửa phần liên quan; gộp một file lúc bàn giao nếu muốn | Claude |
| D11 | *(giả định của Claude, trong spike)* Màn dọc: dải chạy theo cạnh dài (xoay nhóm SVG 90°, không tốn chi phí mỗi frame); `?rot=0` để ép nằm ngang. Gnuh duyệt ở cổng thẩm mỹ G1 | Claude |
| D12 | **Cho qua cổng G1 phần hiệu năng**, không đo Android/iPhone. Thẩm mỹ chưa đánh giá được, duyệt lại ở S2 khi đã có chữ, khung, scrim. Rủi ro đã nêu: min 45 fps ở PC dpr 1, Android dpr cao có thể tệ hơn | Gnuh |
| D13 | *(giả định của Claude, Gnuh sửa được)* Vì không đo, khi chuyển dải lụa sang `app.js` ở S2 giữ đòn bẩy 4 (tự giảm đường/fps khi frame > ~20 ms) làm lưới an toàn; nếu Gnuh phản hồi máy thật giật thì dùng thang dự phòng mục 5 | Claude |
| D14 | *(Claude, Gnuh sửa được)* GĐ3 "hội tụ ôm khung": **chưa thử** tham số hoá `converge`; làm thẳng phương án dự phòng = khung SVG riêng vẽ dần (dashoffset) + dải giữ nguyên, chữ đọc được nhờ scrim tĩnh. Thử `converge` nếu Gnuh thấy intro thiếu "ôm khung" | Claude |
| D15 | *(Claude)* Intro vẽ dần **toàn bộ** số đường hiện hành (40), vì chưa có số đo máy mục tiêu để cắt bớt. Intro kết thúc bằng một timer 3,4 giây sau khi font sẵn sàng (không theo animationend) để chữ kịp hiện hết | Claude |
| D16 | **[Phần mobile cuộn snap hết hiệu lực, D31; điều kiện phân nhánh desktop vẫn dùng]** *(Claude)* Desktop = `(hover:hover) and (pointer:fine) and (min-width:900px)`: một màn không cuộn, lệch trái; còn lại là mobile cuộn snap 3 màn. Điện thoại nằm ngang: `max-height:480px` thu cỡ chữ, vẫn cuộn | Claude |
| D17 | *(Claude)* Màn 2 và 3 có khung nét đứt ghi "làm ở S3" làm chỗ giữ chỗ; bỏ khi làm S3 (**đã bỏ ở S3**: xoá class/CSS `.ph`) | Claude |
| D18 | **[Font tiêu đề/số bị D28 thay một phần: Playfair giữ cho trường, ngày, giờ]** Gnuh thấy Cormorant Garamond "hơi xấu" (mảnh trên nền tối) → tiêu đề/số đổi sang **Playfair Display** (plan cho phép), giảm cỡ chữ ~12% vì Playfair rộng hơn. Be Vietnam Pro giữ nguyên. Nếu vẫn chưa ưng: chỉ cần đổi `--serif` trong `style.css` và tên font ở `<link>` trong `index.html` | Gnuh + Claude |
| D10 | **[Phần mobile hết hiệu lực, D31]** *(giả định của Claude)* Desktop là một màn không cuộn; mobile cuộn snap 3 màn | Claude |
| D19 | **[`?now=` vẫn dùng; `?reset=1` và dòng ghi chú dev hết hiệu lực, D30]** *(Claude, Gnuh sửa được)* "Bản dev" = `file://`, `localhost`, `127.*`, `[::1]`, IP LAN (192.168.*, 10.*, 172.16–31.*), `*.local`. Chỉ ở đó mới bật `?now=` (ISO, **phải mã hoá dấu + thành `%2B`**, đồng hồ chạy tiếp từ mốc đó), `?reset=1` (xoá trạng thái đã xác nhận để test lại) và dòng ghi chú "chưa gửi đi đâu". Host thật thì cả ba đều tắt | Claude |
| D20 | *(Claude)* Odometer: mỗi chữ số là cột 11 ô `[9,0..9]`; chỉ animate khi giảm đúng 1 bước (kể cả 0→9 qua ô đệm rồi snap sau 520 ms); mọi trường hợp khác (lần đầu, quay lại tab, nhảy cách quãng) đặt thẳng không animate. Số giây còn lại làm tròn **lên** (còn 0,3 s vẫn hiện 1). "Ngày" tối thiểu 2 chữ số, tự thêm cột khi ≥ 100. Đang diễn ra / đã diễn ra: ẩn lưới số, thay bằng một dòng chữ. Chữ số dùng `lining-nums tabular-nums` của Playfair (nếu Google Fonts không phục vụ tính năng này, số sẽ kiểu "chữ thường" và có thể bị cắt: đổi `.cdg` sang `var(--sans)`) | Claude |
| D21 | **[HẾT HIỆU LỰC, D30]** *(Claude)* Nút giữ: pointer events + vòng `stroke-dasharray` chạy bằng CSS transition 1 s tuyến tính + `setTimeout` 1000 ms (không thêm vòng rAF). Vì `touch-action:none` nên **chạm bắt đầu từ nút thì không cuộn trang được** (chấp nhận, nút nhỏ). Cảm ứng tự bắt con trỏ nên `pointerleave` không báo khi ngón trượt ra ngoài → thêm kiểm `pointermove` (ra ngoài hộp nút +16 px thì huỷ). Enter/Space xác nhận ngay ở `keydown`; `click` có `detail===0` (trình đọc màn hình) cũng xác nhận. Lưu `localStorage` (bọc try/catch, fallback biến nhớ); mở lại trang hiện luôn "Đã xác nhận" | Claude |
| D22 | **[Phần "desktop màn 3 gọn" hết hiệu lực, D30; nguyên tắc co cỡ theo vh vẫn dùng]** *(Claude, Gnuh sửa được)* Desktop màn 3 gọn: nút + dòng hướng dẫn xếp hàng ngang, nút cỡ theo chiều cao màn (`12vh`, 88–116 px), chữ countdown cỡ theo `vh`. Lý do: ước tính tay, một màn desktop không cuộn dễ tràn ở laptop thấp (viewport cao ~650 px) và `overflow:hidden` + căn giữa sẽ cắt cả trên lẫn dưới. **Chưa kiểm chứng, đây là điểm rủi ro số 1 của S3** | Claude |
| D23 | *(Claude, Gnuh sửa được)* Parallax chuột: chỉ desktop (cùng điều kiện D16, `matchMedia` đánh giá lúc chạy), chỉ `pointermove` của chuột (bỏ chạm/bút), lerp theo thời gian thật (hằng 6/s, ~170 ms), gọi trong `tick` (không thêm vòng rAF). Gắn lên `#bg` (dải, +14 px theo chuột) và `#frame` (khung, −5 px **ngược** chiều để có độ sâu); hai phần tử này là lớp bao ngoài, không có animation riêng (dashoffset của intro nằm ở `#fr` và các path bên trong). Biên độ ở hằng `PL` trong `app.js`, đặt 0 để tắt từng lớp; `?px=0` tắt, `?px=2` gấp đôi để so sánh. Chuột rời cửa sổ thì trượt về giữa. Vì rAF tắt trong intro nên parallax chỉ bắt đầu sau intro. Dải có overscan ngang 5% bề dài (≥ 45 px ở ≥ 900 px) nên lệch 14 px không lộ mép. **Chưa xem bằng mắt**: việc khung lệch ngược có đẹp hay gây khó chịu là quyết định thẩm mỹ của Gnuh | Claude |
| D24 | *(Claude)* Resize/xoay: listener `resize` chuyển lên **trước** nhánh reduced-motion. Lỗi cũ ở S2: với reduced-motion, `return` sớm khiến listener không được gắn, xoay/đổi cỡ màn thì `viewBox` và khung giữ cỡ cũ (dải méo/lệch). Đã tái hiện trên code gốc (3 kiểm tra hỏng) và sửa. Thêm: bỏ qua nếu `innerWidth × innerHeight` không đổi. Resize giữa lúc intro vẫn giữ hình cũ cho đường intro (chấp nhận, như S2) | Claude |
| D25 | **[HẾT HIỆU LỰC, D30]** *(Claude, Gnuh sửa được)* Reduced-motion: **vòng tô của nút giữ giữ transition** (chỉ còn tắt transition của `.rl` và `#hold`). Lý do: tắt thì vòng nhảy đầy ngay lúc chạm trong khi vẫn phải giữ 1 s mới xác nhận, tức phản hồi sai; vòng tiến trình là chuyển động thiết yếu, không phải trang trí. Intro, dải lụa, confetti, trượt số vẫn tắt. Nếu Gnuh muốn tuân thủ nghiêm: đổi lại 1 dòng cuối `style.css` (xem ghi chú S4); Enter/Space và link thay thế vẫn là đường thoát | Claude |
| D26 | **[Phần "giữ Bạn sẽ đến chứ + nút" hết hiệu lực, D30; phần bỏ ô nhập tên vẫn đúng]** **Đóng cổng G2.** Gnuh xem trên máy thật: không tràn màn desktop (D22 không thành lỗi), nút giữ ổn, countdown ổn, không nêu trang bị trống. Kết luận *(diễn giải của Claude từ phản hồi này)*: **bỏ** ô nhập tên + gửi dữ liệu (D8, chưa thêm bước 3 của G2). Giữ nguyên "Bạn sẽ đến chứ?" + nút (kể cả khi sự kiện đã diễn ra, tồn đọng 4 của S3). Gnuh sẽ tự sửa thông tin hiển thị | Gnuh + Claude |
| D27 | Gnuh yêu cầu (20/11/2026, sau S4): (1) thông tin hiển thị tham khảo ảnh mẫu, **bỏ** đoạn "Đây là ngày…" của ảnh; (2) học font chữ trong ảnh; (3) thêm số điện thoại 0345006912; (4) mobile gọn **một trang, không cuộn** (desktop Gnuh thấy ổn, giữ nguyên); (5) bỏ nút "Bỏ qua" ở intro; (6) bỏ "Bạn sẽ đến chứ?" cùng nút xác nhận. D28–D34 là cách Claude diễn giải 6 điểm này | Gnuh |
| D28 | *(Claude, Gnuh sửa được)* **Phân vai font theo ảnh mẫu.** Kicker (ảnh: "YOU'RE INVITED TO MY", serif chữ hoa cách chữ rộng) → Playfair, chữ hoa, `letter-spacing` ~.2em, bỏ nghiêng. Tiêu đề lớn (ảnh: "GRADUATION", sans tròn nét dày) → **Paytone One** 400. Tên người mời + lời cảm ơn (ảnh: script có chữ hoa mỹ) → **Lovers Quarrel** 400. Trường, ngày, giờ (ảnh: serif, ngày/giờ đậm) → giữ Playfair Display, ngày/giờ đậm hơn. Số điện thoại (ảnh: sans) → Be Vietnam Pro 400. Thêm biến `--display`, `--script` cạnh `--serif`, `--sans` để đổi font chỉ ở một chỗ (như D18). **Giới hạn:** không nhận ra chính xác font gốc (ảnh dạng Canva), đây là font *gần giống*, **chưa xem bằng mắt**. Đã đối chiếu Fontsource (bản phát hành của Google Fonts): Paytone One có subset `vietnamese`; Lovers Quarrel ghi hỗ trợ tiếng Việt; Playball (dự phòng, nét đậm kiểu thể thao nên ít giống) cũng có. Ảnh mẫu viết tên và trường **không dấu** ("Nguyen Tra My", "Thach That"): nhiều khả năng font script gốc không có tiếng Việt, nên web không thể dùng đúng font đó mà vẫn giữ dấu | Claude |
| D29 | *(Claude, Gnuh sửa được)* **Bộ thông tin theo ảnh mẫu**, xem bảng 2b: giữ tiếng Việt; dòng trường dùng dạng ngắn "THPT Thạch Thất"; **bỏ** hàng "Địa điểm" (ảnh không có, dòng trường đã là địa điểm, khớp D3; tiết kiệm chiều cao mobile); **thêm** lời kết và dòng liên hệ. Không chép "AM" của ảnh: "12:00 AM" là nửa đêm, sai; giữ "10h30 – 12h00" | Claude |
| D30 | **Gỡ hẳn tính năng xác nhận** (đảo D26 phần "giữ nút"): markup `#s3`, CSS liên quan, khối GĐ5 trong `app.js` (từ comment `GĐ5: nút giữ` đến hết file), confetti, localStorage, `KEY`, `?reset=1`, dòng ghi chú dev, trạng thái "Đã xác nhận". Giữ countdown và `?now=`. Hệ quả: rủi ro "xác nhận chưa gửi đi đâu" (mục 9) và tồn đọng "đã diễn ra vẫn hiện Bạn sẽ đến chứ" tự hết. **Phải gỡ cả HTML lẫn JS cùng lúc:** xoá HTML mà còn JS thì `lbl.textContent` ném TypeError (countdown vẫn chạy vì khởi tạo trước đó, nhưng console lỗi); xoá JS mà còn HTML thì còn nút chết | Gnuh + Claude |
| D31 | *(Claude, Gnuh sửa được)* **Mobile một trang.** Bỏ `scroll-snap` và `min-height:100dvh` của `section`; nội dung xếp một cột trong `main`, căn giữa theo chiều dọc bằng cách **an toàn** (`margin-block:auto` ở phần tử con hoặc `justify-content:safe center`; **không** dùng `justify-content:center` thuần vì khi nội dung cao hơn màn, đầu trang bị cắt và không cuộn tới được). Giữ `overflow-y:auto` ở `main` làm van an toàn cho màn rất thấp/ngang (bài học D22: cắt cụt còn tệ hơn cuộn). Cỡ chữ và khoảng cách co theo cả `vw` lẫn `vh` (`min()`/`clamp()`). Mobile: Ngày và Giờ xếp hai cột cạnh nhau. **Tiêu chí:** vừa một màn, không cuộn, ở viewport thật ≥ 360×560 (có thanh trình duyệt); thấp hơn thì chấp nhận cuộn nhưng không được cắt đầu/cuối. Desktop giữ nguyên, chỉ mất màn 3 | Claude |
| D32 | **Bỏ nút "Bỏ qua"**: xoá `<button id="skip">`, CSS `#skip*`, và **4 chỗ trong `app.js`** nhắc `skip` (khai báo ở khối dải lụa, `skip.hidden` trong `finishIntro`, `skip.hidden` ở nhánh reduced-motion, `skip.addEventListener`). Chỉ xoá HTML thì `skip` là null, `skip.addEventListener` ném TypeError lúc nạp → các dòng sau đó (hẹn `finishIntro`, `visibilitychange`) không chạy → dải lụa kẹt ở hình intro, không bao giờ chạy tiếp. Hệ quả chấp nhận theo yêu cầu: người xem **không thoát được intro** (~3,4 s sau khi font sẵn sàng, tối đa thêm 1,5 s chờ font). Thêm 2 dòng mới (lời kết, liên hệ) nên: đặt `--d` của chúng ≤ ~2,6 s **hoặc** nới timer `finishIntro` từ 3400 lên ~4000 ms, để chúng không bị cắt giữa chừng khi timer gỡ class `intro` (fade 0,8 s) | Gnuh + Claude |
| D33 | *(Claude, Gnuh sửa được)* **Số điện thoại:** CONFIG thêm `phone: "0345006912"` (cho `tel:`) và `phoneText: "0345 006 912"` (hiển thị, nhóm 4-3-3 cho dễ đọc; ảnh để liền). Nhãn "Liên hệ", **không** dùng emoji 📞 của ảnh (hiển thị tuỳ nền tảng, và ràng buộc "mọi hình là SVG"). Dùng `<a>` với `href="tel:…"` gán từ CONFIG bằng JS (không gõ cứng hai chỗ), vùng chạm ≥ 44 px; thêm số vào `<noscript>`. **Thêm khoá vào `T` (app.js) trước khi thêm `data-t` vào HTML:** thiếu khoá thì `T[...].normalize` ném lỗi và cả trang mất chữ. Số sẽ công khai trên trang | Claude |
| D34 | *(Claude)* Khi Q1 chưa có trả lời, **giữ** `inviter` Nguyễn Mạnh Hùng và ngày 29/11/2026 (D2, D4); **không** chép tên và ngày của ảnh mẫu (Nguyễn Trà My, 22/11/2026) | Claude |

**Đã đủ dữ liệu thiệp.** Tên người mời đã có (Nguyễn Mạnh Hùng); khi test dấu dùng cả tên này (ễ, ạ, ù) lẫn "Nguyễn Thị Thuỷ" (ỷ).

### 2b. Đối chiếu ảnh mẫu → web (D29)

Ảnh mẫu: thiệp kiểu "Graduation", nền kem hồng, chữ nâu hồng. **Chỉ học thông tin và font**; bảng màu, concept dải lụa, nền tối giữ nguyên (D1). Cột "Web" là mặc định của plan, Gnuh sửa được.

| Phần tử | Ảnh mẫu | Web (mặc định) | Ghi chú |
|---|---|---|---|
| Dòng dẫn | "YOU'RE INVITED TO MY" | "Thư mời", chữ hoa cách chữ rộng | Giữ tiếng Việt; muốn sát ảnh hơn có thể đổi thành "Bạn được mời đến" |
| Tiêu đề | GRADUATION | "Kỉ yếu lớp 12A01" (font Paytone One) | Giữ nguyên chữ hoa/thường: ép chữ hoa dễ làm dấu chồng (Ế, Ỉ) đụng dòng trên |
| Người mời | "Nguyen Tra My" (script) | "Nguyễn Mạnh Hùng" (script) + nhãn "Lời mời từ" giữ nguyên | Ảnh **khác tên** → Q1 |
| Trường | "THPT Thach That" | "THPT Thạch Thất" (`schoolShort`) | Thay cho tên đầy đủ |
| Ngày | 22 \| 11 \| 2026 (vạch đứng mảnh) | "29/11/2026" | Ảnh **khác ngày** → Q1. Giữ dạng liền để trình đọc màn hình đọc đúng; muốn giống ảnh thì dựng vạch bằng CSS, `aria-label` giữ "29/11/2026" |
| Giờ | "10 : 30 - 12 : 00 AM" | "10h30 – 12h00" | Không chép "AM" (sai) |
| Địa điểm | không có | **bỏ hàng này** | Dòng trường chính là địa điểm (D3) |
| Đoạn "Đây là ngày…" | có | **không đưa vào** | Gnuh yêu cầu |
| Lời kết | "Thank you !" (script) | "Cảm ơn bạn!" (script) | Tiếng Việt mặc định; Gnuh muốn giữ tiếng Anh thì đổi một chuỗi |
| Liên hệ | "📞:0389349871" | "Liên hệ 0345 006 912" (D33) | Số của Gnuh thay số trong ảnh |
| Đếm ngược | không có | giữ (D20) | Gnuh không yêu cầu bỏ |

### 2c. Câu hỏi mở

**Q1 (cần Gnuh trả lời trước khi sửa CONFIG):** ảnh mẫu ghi "Nguyen Tra My" và 22/11/2026, còn CONFIG là Nguyễn Mạnh Hùng và 29/11/2026. Giờ 10:30–12:00 và trường thì trùng. Plan đang coi ảnh là **mẫu tham khảo** (số điện thoại Gnuh dặn khác số trong ảnh, nên ảnh nhiều khả năng là thiệp của người khác) và giữ dữ liệu cũ (D34). Nếu thật ra phải dùng tên/ngày trong ảnh: sửa **đồng thời** `inviter`, `dateText`, `startISO`, `endISO` và `<noscript>`. Countdown đếm theo `startISO`, không đọc `dateText`, nên sửa một bộ mà quên bộ kia là lệch ngầm. Lưu ý hôm nay 20/11 nên mốc 22/11 chỉ còn ~2 ngày.

---

## 3. Dữ liệu thiệp (CONFIG, đặt đầu `app.js`)

```
inviter:      "Nguyễn Mạnh Hùng"
schoolFull:   "Trung học phổ thông Thạch Thất"
schoolShort:  "THPT Thạch Thất"
className:    "12A01"
dateText:     "29/11/2026"
timeText:     "10h30 – 12h00"
startISO:     "2026-11-29T10:30:00+07:00"   // mốc đếm ngược, cứng múi giờ +07:00
endISO:       "2026-11-29T12:00:00+07:00"   // sau mốc này = "đã diễn ra"
phone:        "0345006912"                  // GĐ8 (D33): dùng cho tel:
phoneText:    "0345 006 912"                // GĐ8 (D33): chữ hiển thị
```

Địa điểm = tên trường (không thêm thông tin địa điểm). **Sau GĐ8 (D29):** hàng "Địa điểm" bị bỏ, dòng trường dùng `schoolShort`; `schoolFull` không còn hiển thị (giữ trong CONFIG, đừng để nó lệch). Hiện tại (19/11/2026) còn 10 ngày, nên ô "ngày" của countdown tối thiểu 2 chữ số.

---

## 4. Ràng buộc kỹ thuật

- Không framework, không ảnh raster. Mọi hình là SVG.
- Số path dải lụa tối đa ~40.
- **Quy tắc animate (đã sửa so với brief gốc, vì brief tự mâu thuẫn):** mọi thứ chỉ animate `transform` và `opacity`, **trừ ba ngoại lệ có chủ đích**:
  1. Dải lụa (cách B): cập nhật `d` bằng rAF, đây là phần tốn nhất nên phải đo.
  2. Intro một lần: `stroke-dashoffset`.
  3. Vòng giữ nút (SVG nhỏ): `stroke-dasharray`.
- Không animate filter/blur trên SVG lớn. Glow là gradient dựng sẵn hoặc lớp tĩnh riêng.
- **Chỉ một vòng rAF chính** (dải lụa + parallax dùng chung), countdown dùng timer riêng 1 giây.
- Tôn trọng `prefers-reduced-motion`: dải lụa đứng yên, bỏ intro, bỏ confetti.
- Tạm dừng mọi animation/timer khi tab ẩn (`visibilitychange`); quay lại thì cập nhật ngay, không "bù" animation.
- Phải mượt trên Android tầm trung.
- Mọi chuỗi chữ trong CONFIG chuẩn hoá `normalize('NFC')` trước khi tách chữ cái (tránh tách rời dấu thanh).
- Trạng thái cuối = CSS mặc định; intro chỉ là animation "từ trạng thái đầu về mặc định" (để reduced-motion và lỗi JS tự hiện đúng nội dung; nút Bỏ qua đã gỡ, D32). Có `<noscript>` chứa thông tin thiệp.

---

## 5. Thiết kế dải lụa (cách B)

**Vì sao B hợp với concept:** hình dải là hàm của thời gian `t`, nên giữ được dạng dải sạch mà vẫn "sống" (cách A hoặc cứng như băng chuyền, hoặc trôi pha làm tan hình).

**Mô hình đề xuất để thử trong spike** (đường thứ `i`, `u_i` ∈ [−1, 1] rải đều theo chỉ số):

```
trục(x,t)   = A1·sin(k1·x + w1·t) + A2·sin(k2·x − w2·t + φ)     // đường cong chủ đạo
xoắn θ(x,t) = k3·x + w3·t
y_i(x,t)    = trục(x,t) + W(x,t) · u_i · sin(θ(x,t))             // bề rộng dải thu/phình theo sin θ
```

Các đường xoè ra khi |sin θ| lớn và chụm lại khi sin θ ≈ 0, tạo cảm giác dải xoắn 3D. Độ đậm nhạt từng đường đặt **tĩnh** theo |u_i| (không đổi mỗi frame).

**Đòn bẩy hiệu năng của B (áp dụng theo thứ tự nếu chưa đạt cổng):**
1. Gom 40 đường thành 4–6 phần tử `<path>` (mỗi phần tử nhiều subpath `M…M…`) để mỗi frame chỉ `setAttribute('d')` vài lần.
2. Mỗi đường 40–60 điểm, nối bằng đường cong mượt thay vì dùng nhiều điểm.
3. Tính theo mốc thời gian thật (timestamp) để frame chậm không làm chuyển động chậm theo.
4. Tự giảm chất lượng: nếu trung bình frame > ~20 ms trong 1 giây đầu thì giảm số đường, rồi giới hạn 30 fps.
5. Gradient stroke dùng chung (`userSpaceOnUse`), không filter.
6. Trong lúc intro vẽ dần, **đóng băng `t`** (không đổi `d`), vẽ xong mới bật rAF.

**Thang dự phòng nếu vẫn dưới cổng:** 32 đường → 24 đường → 30 fps → biến thể A′ (3–4 nhóm path, mỗi nhóm `translateX` riêng, thở bằng `scaleY ≤ 1` và opacity lệch pha) → canvas (**vi phạm "toàn SVG", chỉ làm khi Gnuh đồng ý**).

---

## 6. Kế hoạch theo giai đoạn

### GĐ0 — Dữ liệu và nền kiểm thử *(S1)*
- [x] Tạo cấu trúc thư mục: `thiep-moi/index.html`, `style.css`, `app.js`, `spike/ribbon.html`
- [x] Đặt CONFIG (mục 3), bảng màu: nền `#07080f → #0d1022`, vàng đồng `#e8c887 → #b8864b`, chữ kem `#f3ead8`
- [x] Kiểm tra tương phản chữ kem/vàng nhỏ trên nền navy (kem 15,8–16,7; vàng sáng 11,7–12,4; vàng đồng 5,9–6,2; đều ≥ 4,5 trên nền phẳng. Chưa tính chữ đè lên dải lụa → cần scrim ở S2)

### GĐ1 — Spike dải lụa cách B *(S1, có CỔNG)*
- [x] `spike/ribbon.html` độc lập: sinh path theo mô hình mục 5, rAF, pause khi tab ẩn
- [x] Tham số thử nhanh qua URL: số đường (24/32/40), số điểm/đường, giới hạn fps
- [x] Thử thêm cảnh intro vẽ dần dashoffset trên cả 40 đường (đo riêng)
- [x] Gnuh đo trên Android tầm trung + iPhone (cách đo: mục 7), ghi số vào mục 8 *(bỏ qua theo D12; chỉ có 1 số đo trên PC ở mục 8)*
- [x] **CỔNG G1 (đã cho qua có điều kiện, xem D12/D13):** giữ ≥ 55 fps liên tục 30 giây trên Android tầm trung, và Gnuh duyệt về thẩm mỹ ("đẹp, không rối, không mất hình dải"). Chưa qua thì đi thang dự phòng mục 5, **không** sang GĐ2.

### GĐ2 — Khung tĩnh *(S2)*
- [x] Markup + CONFIG render ra chữ; `<noscript>` chứa thông tin
- [x] Mobile: dọc, `100vh` fallback rồi `100dvh`, safe-area, scroll-snap 3 màn (Hero → Thông tin + Countdown → Xác nhận), vùng chạm ≥ 44px **[hết hiệu lực: một trang không cuộn, D31]**
- [x] Desktop: một màn không cuộn, nội dung lệch trái/trung tâm, giới hạn bề rộng dòng. Phân nhánh bằng `(hover:hover) and (pointer:fine)` và bề rộng, không dùng UA
- [x] Quy tắc riêng cho điện thoại nằm ngang (chiều cao thấp)
- [x] Font *(nay là Playfair Display + Be Vietnam Pro, D18; Gnuh báo giao diện ổn, không nêu lỗi dấu)*: Cormorant Garamond hoặc Playfair Display (tiêu đề) + Be Vietnam Pro (nội dung), nạp Google Fonts khi dev. Test "Nguyễn Mạnh Hùng", "Nguyễn Thị Thuỷ", "Thạch Thất" ở line-height thật
- [x] Lớp scrim tối tĩnh sau khối chữ; glow là gradient dựng sẵn
- [x] Duyệt lại thẩm mỹ dải lụa *(Gnuh: ổn, cả điện thoại lẫn máy tính)* cùng chữ/khung/scrim (phần thẩm mỹ G1 còn mở); nếu rối thì sửa mô hình mục 5

### GĐ3 — Intro *(S2)*
- [x] Vẽ dần đường (dashoffset, `pathLength="1"`, stagger). Số đường vẽ thật tuỳ kết quả đo ở GĐ1; phần còn lại fade/translate vào
- [ ] *(D14: làm phương án dự phòng, chưa thử converge)* "Hội tụ ôm khung": thử tham số hoá `converge` (thu biên độ và bề rộng dải) cộng một khung SVG riêng vẽ dần. Nếu rối thì dùng phương án khung riêng + dải lùi bằng opacity/transform
- [x] Chữ hiện từng chữ cái: tách bằng `Array.from` sau NFC, bọc theo từ bằng `white-space:nowrap`, `aria-label` ở khối cha và `aria-hidden` ở span chữ cái
- [x] Chờ `document.fonts.ready` (timeout ~1,5 giây) rồi mới chạy intro
- [x] Nút "Bỏ qua" hiện từ giây 0 **[nút Bỏ qua đã gỡ ở GĐ8, D32]**; intro tổng ≤ ~4 giây; reduced-motion thì bỏ intro
- [x] Chạy lại dải lụa rAF sau intro, pause khi tab ẩn

> Ghi chú S2: các ô [x] ở GĐ2–3 nghĩa là **code đã viết**, chưa ai chạy trên máy thật. Ô thẩm mỹ GĐ2 và converge GĐ3 còn mở.

### GĐ4 — Countdown odometer *(S3)*
- [x] Mỗi chữ số là một cột 0–9 trượt `translateY`; xử lý 9→0 mượt; số chữ số của "ngày" co giãn
- [x] Không animate ở lần render đầu và khi quay lại tab
- [x] Mốc `startISO` cứng +07:00; 3 trạng thái: chưa tới / đang diễn ra (đến `endISO`) / đã diễn ra
- [x] `?now=` (chỉ bản dev, D19) để test 3 trạng thái không phải chờ; đổi múi giờ thiết bị để xác nhận countdown không đổi *(jsdom: kết quả giống nhau ở TZ Việt Nam / New York / Tokyo; Gnuh nên tự thử đổi múi giờ máy thật)*
- [x] A11y: `role="timer"`, `aria-live="off"`, một dòng chữ ẩn cập nhật mỗi phút

### GĐ5 — Nút xác nhận *(S3; **[hết hiệu lực] đã bị gỡ hoàn toàn ở GĐ8, D30**: giữ làm lịch sử, đừng làm lại)*
- [x] Giữ ~1 giây bằng pointer events, vòng tô đầy bằng dasharray; hủy khi `pointerup`/`pointerleave`/`pointercancel`
- [x] Chặn lỗi mobile: `touch-action:none`, `-webkit-touch-callout:none`, `user-select:none`, chặn `contextmenu`
- [x] Phương án thay thế bắt buộc: Enter/Space xác nhận ngay + dòng chữ nhỏ cố định "Không giữ được? Chạm vào đây"
- [x] Confetti 30 mảnh SVG (transform + opacity), xoá khỏi DOM sau 1,8 giây (hoạt ảnh dài tối đa ~1,6 s); reduced-motion thì bỏ
- [x] Trạng thái chờ / đang giữ / đã xác nhận; lưu localStorage bọc `try/catch` có fallback bộ nhớ
- [x] Ghi chú trên giao diện dev rằng xác nhận chưa gửi đi đâu (tránh hiểu nhầm là người mời đã nhận được)
- [x] **CỔNG G2 "độ trống" (ĐÃ ĐÓNG ở S4, xem D26: không trống, bỏ ô nhập tên):** xem bản hoàn thiện trên mobile (màn 3) và desktop. Nếu thấy trống thì thử theo thứ tự: (1) tăng cỡ chữ, ngày dạng lớn "29 · 11 · 2026" kèm "Chủ nhật" (suy ra từ ngày, không thêm thông tin mới); (2) tăng hiện diện dải lụa ở màn đó; (3) **cuối cùng** mới thêm ô nhập tên + gửi (đề xuất: Google Form qua POST `no-cors` vào Google Sheet; không đọc được phản hồi nên giao diện phải lạc quan; cần URL form nên chỉ làm khi Gnuh có form). Nếu không trống thì ghi "bỏ" vào mục 2.

> Ghi chú S3: các ô [x] ở GĐ4–5 nghĩa là **code đã viết và logic đã qua test jsdom** (trạng thái, chữ số, wrap 0→9, tab ẩn, nhấn giữ/nhả, Enter, link thay thế, click của trình đọc màn hình, confetti dọn DOM, `?now=` bị bỏ qua ở host thật). jsdom **không** kiểm được: hoạt ảnh trượt/vòng tô có mượt không, giữ bằng ngón tay thật, `touch-action`, safe-area, bố cục, tràn màn desktop. Những thứ đó chỉ có Gnuh kiểm được.

### GĐ6 — Riêng desktop *(S4)*
- [x] Parallax chuột nhẹ, dùng chung vòng rAF, lerp; gắn lên **phần tử bao ngoài** (không đè lên phần tử đang animate); tắt khi reduced-motion *(D23; code xong, jsdom đạt; chưa xem bằng mắt)*
- [x] Resize/xoay màn hình: dựng lại path sau debounce *(D24; sửa lỗi reduced-motion; jsdom đạt; chưa thử xoay máy thật)*
- [x] Desktop khác mobile về **tương tác**, không chỉ kích thước *(parallax chuột là tương tác riêng desktop; mobile không có)*

### GĐ7 — Hoàn thiện *(S4)*
- [ ] Ma trận test: Chrome Android, Safari iOS, Chrome/Firefox/Safari desktop (Zalo/Messenger in-app chỉ test được khi có host: để sau)
- [ ] Kiểm tra: focus ring, tương phản, reduced-motion, tab ẩn, pin/nhiệt (chạy 5 phút), dung lượng
- [ ] Rà soát dấu tiếng Việt toàn trang
- [ ] *(Tuỳ chọn, khi có host)* ảnh OG 1200×630 từ SVG sang PNG (chữ chuyển thành path), thẻ OG URL tuyệt đối; preview thường bị cache nên chốt xong mới chia sẻ
- [ ] *(Tuỳ chọn)* gộp 1 file HTML, nhúng font subset base64 để không phụ thuộc mạng
- [x] Checklist đổi dữ liệu: sửa CONFIG; nếu có OG thì sửa cả `<title>` và thẻ meta *(bản đầy đủ hơn ở ghi chú S4 bên dưới: dữ liệu nằm ở nhiều chỗ ngoài CONFIG)*

> Ghi chú S4 (GĐ7): các ô GĐ7 **để trống có chủ đích**: phần Claude làm được (rà soát tĩnh) đã xong, phần còn lại chỉ Gnuh kiểm được trên máy thật; danh sách ở nhật ký S4. Đã đo/kiểm tự động: dung lượng (`index.html` 3,4 KB, `style.css` 7,7 KB, `app.js` 17,4 KB gzip ≈ 6,9 KB; chưa tính Google Fonts), cả 4 file đều NFC, không có dấu rời, `<noscript>` khớp CONFIG, `node --check` đạt.
>
> **Checklist đổi dữ liệu thiệp (bản S4; mục (3)–(5) đã lỗi thời, xem checklist mới ở GĐ8):** (1) `app.js` đầu file: `CONFIG` (inviter, schoolFull, schoolShort, className, dateText, timeText, startISO, endISO). `dateText/timeText` và `startISO/endISO` là **hai bộ riêng, không tự đồng bộ**: sửa cả hai, nếu lệch thì chữ hiển thị một giờ còn countdown đếm theo giờ khác. (2) `index.html`: `<title>` và `<noscript>` viết cứng. (3) Chữ cứng trong `index.html`/`app.js` không đọc từ CONFIG: "Thư mời", "Lời mời từ", "Bạn sẽ đến chứ?", "Kỉ yếu lớp …" (ghép trong `T.title`), "Kỉ yếu đang diễn ra/đã diễn ra", "Hẹn gặp bạn ngày …". (4) **Địa điểm** hiện lấy `schoolFull` (`T.place`); nếu địa điểm khác tên trường thì phải thêm trường CONFIG riêng. (5) `KEY` localStorage trong `app.js` (`kyyeu-12a01-confirm`): đổi tên key khi đổi sang sự kiện khác, nếu không người đã bấm xác nhận bản cũ sẽ thấy "Đã xác nhận" ngay cho thiệp mới.


### GĐ8 — Chỉnh theo yêu cầu 20/11/2026 *(S5; plan viết xong, **chưa có dòng code nào**)*

Làm đúng thứ tự (bước sau phụ thuộc bước trước). Sau mỗi bước: `node --check app.js`, mở thử trên localhost, nhìn console.

1. **Gỡ** (D30, D32)
   - [ ] `index.html`: xoá `#s3`, `<button id="skip">`.
   - [ ] `style.css`: xoá mọi rule của `#hold`, `#hold-lbl`, `.trk/.prg`, `.holding/.done`, `.hint`, `.alt`, `.note`, `.cf` + `@keyframes cfx`, `.ask`, `#confirm`, `#skip` (kể cả bản override trong các `@media`); sửa `#countdown [hidden],#confirm [hidden]` thành `#countdown [hidden]`; dòng reduced-motion cuối còn `.rl{transition:none!important}`. **Giữ** `.sr`, `.cd/.cu/.cdg/.dg/.rl/.cl/.cdm`, `#countdown`.
   - [ ] `app.js`: xoá khối GĐ5 (đến hết file) và 4 chỗ `skip`; `NS`, `RM` trong khối S3 chỉ confetti dùng nên thành thừa; giữ `DEV`, `?now=`.
   - [ ] Kiểm bằng một lệnh `grep -nE "hold|confirm|skip|confetti|dev-note|KEY|store\.|#s3|\.ask|\.alt|\.hint"` trên 3 file: không còn tham chiếu mồ côi.
2. **Dữ liệu** (D29, D33, Q1)
   - [ ] CONFIG thêm `phone`, `phoneText`; `T`: bỏ `place`, `school` lấy `schoolShort`, thêm `phoneText`; JS gán `href="tel:…"` từ `CONFIG.phone`.
   - [ ] `index.html`: bỏ hàng "Địa điểm"; thêm dòng lời kết "Cảm ơn bạn!" và dòng liên hệ (có `data-t`, class `fade` + `--d`); `<noscript>` thêm số điện thoại.
   - [ ] Nếu Q1 trả lời "dùng tên/ngày của ảnh": sửa theo 2c.
3. **Font** (D28)
   - [ ] `<link>` Google Fonts: thêm Paytone One 400 và Lovers Quarrel 400; bỏ kiểu/độ đậm không còn dùng (Be Vietnam Pro chỉ còn 400); thêm `--display`, `--script`; gán lại `h1`, `.name`, lời kết, `.kicker`, `.school`, `.val`, dòng liên hệ.
   - [ ] Test dấu bằng đúng 4 chuỗi ở cỡ thật: "Kỉ yếu lớp 12A01", "Nguyễn Mạnh Hùng", "THPT Thạch Thất", "Cảm ơn bạn!" (chú ý ỉ, ế, ễ, ạ, ù, ả, ơ); line-height không cắt dấu.
   - [ ] `.name` đang `data-split` (tách từng chữ cái thành `inline-block`): với font script, việc này mất kerning/ligature và có thể làm tên rời rạc. Nếu nhìn rời thì tách **theo từ** cho `.name`.
   - [ ] Gnuh xem bằng mắt: nếu tên (script mảnh) khó đọc trên nền tối + dải vàng chạy sau, tăng cỡ/đổi màu kem, hoặc đổi script khác (**phải tự kiểm có subset tiếng Việt trước khi dùng**); nếu chữ tròn dày của h1 lệch concept thì đổi `--display` về Playfair (một dòng).
4. **Bố cục mobile một trang** (D31)
   - [ ] Sửa CSS theo D31; kiểu cho lời kết và dòng liên hệ; `--d` của hai dòng mới và/hoặc timer `finishIntro` (D32).
   - [ ] Desktop: kiểm lại không tràn ở viewport ~1366×650 và ~1920×950 (đã mất màn 3 nhưng thêm hai dòng; `overflow:hidden` + căn giữa sẽ cắt cả hai đầu nếu tràn, như đã nêu ở D22).
5. **Cổng G3 (chỉ Gnuh kiểm được; Claude không tự khẳng định đã đạt)**
   - [ ] Mobile không cuộn ở các viewport xấp xỉ **360×560**, **390×664** (iPhone cỡ thường, Safari có thanh), **412×780**. Hai cỡ **320×480** và điện thoại ngang **667×375**: chấp nhận cuộn nhưng **không được cắt đầu/cuối**.
   - [ ] Mạng chậm (DevTools: Slow 4G, tắt cache): font dự phòng hiện tạm thời không làm tràn màn; `document.fonts.ready` chỉ chờ tối đa 1,5 s rồi chạy intro, sau đó font thật vào có thể làm nhảy bố cục.
   - [ ] Bấm thử số điện thoại trên điện thoại thật (mở trình quay số); Tab bàn phím: chỉ còn số điện thoại là điểm dừng, focus ring thấy rõ.
   - [ ] Intro không có nút Bỏ qua vẫn chịu được khi mở nhiều lần liên tiếp; dòng cuối không bị cắt fade.

**Checklist đổi dữ liệu thiệp (bản mới, thay mục (3)–(5) của bản S4):** (1) `CONFIG` gồm cả `phone`/`phoneText`; `dateText/timeText` và `startISO/endISO` vẫn là hai bộ riêng. (2) `index.html`: `<title>` và `<noscript>` (có thêm số điện thoại) viết cứng. (3) Chữ cứng không đọc từ CONFIG: "Thư mời", "Lời mời từ", "Cảm ơn bạn!", "Liên hệ", "Kỉ yếu lớp …" (ghép trong `T.title`), "Kỉ yếu đang diễn ra/đã diễn ra". (4) Không còn `KEY` localStorage, không còn "Bạn sẽ đến chứ?", "Hẹn gặp bạn ngày …".

---

## 7. Cách test trên điện thoại (localhost)

- Trên PC: `python -m http.server 8000 --bind 0.0.0.0` trong thư mục dự án (hoặc `npx serve`). Điện thoại cùng Wi-Fi mở `http://<IP-LAN-của-PC>:8000`. Lưu ý `localhost` trên điện thoại là chính điện thoại, không phải PC; tường lửa có thể chặn cổng.
- Android có DevTools từ xa: bật USB debugging, mở `chrome://inspect` trên PC. Trong DevTools bật **Rendering → Paint flashing, Layer borders, FPS meter**; đo bằng tab Performance.
- iPhone: Safari Web Inspector cần Mac; nếu không có thì đánh giá bằng mắt và quay màn hình.
- Báo lại cho Claude: tên máy (chip/RAM), số FPS trung bình và thấp nhất, có giật/nóng máy không, kèm video nếu được.

---

## 8. Số đo và kết quả (điền trong session)

| Ngày | Máy | Biến thể (số đường / điểm / fps cap) | FPS TB | FPS thấp nhất | Nhận xét |
|---|---|---|---|---|---|
| 20/11/2026 | PC, bản xem trước nhúng trong Claude (KHÔNG phải máy mục tiêu), 639×609, dpr 1 | 40 / 48 / 60 | 54,8 | 45 | Tệ nhất 50 ms, >20 ms 9,1%, JS 1,67 ms/frame; chụp ở giây 26/30. Chưa đo Android/iPhone; thẩm mỹ chưa đánh giá được vì thiếu các thành phần khác |

---

## 9. Rủi ro đang theo dõi

- **B chạy trên main thread:** chi phí chính là raster nét vàng toàn màn hình mỗi frame; mobile DPR cao càng nặng. Đã có thang dự phòng ở mục 5.
- **[Hết hiệu lực, D30]** **Giữ nút 1 giây** dễ bị hệ điều hành cắt (cuộn, long-press); đã có checklist ở GĐ5.
- **Mâu thuẫn ràng buộc "chỉ transform/opacity"** đã được thay bằng 3 ngoại lệ ở mục 4; session nào muốn thêm ngoại lệ thì phải ghi vào mục 2.
- **[Hết hiệu lực, D30]** **Nút xác nhận chưa gửi đi đâu:** nếu sau này chia sẻ link thật, người nhận sẽ tưởng người mời biết họ đã xác nhận.
- **Đồng hồ thiết bị sai** thì countdown sai (chấp nhận, không xử lý).
- **Dấu chồng nhau** (ễ, ạ, ù trong tên người mời) có thể đụng dòng trên với font tiêu đề: test ở line-height thật.
- **Concept nền navy + vàng** khá phổ biến: điểm khác biệt phải đến từ chất lượng chuyển động và typography.
- **Parallax (D23) chưa xem bằng mắt**: biên độ 14/−5 px là ước lượng; khung lệch ngược có thể gây cảm giác "khung trôi". Chỉnh ở hằng `PL`, hoặc đặt khung về 0.
- **Chưa kiểm chứng** hành vi trình duyệt trong Zalo/Messenger (dvh, localStorage, visibilitychange): để sau khi có host.
- **Ảnh mẫu khác CONFIG ở tên và ngày (Q1):** sửa nhầm hoặc sửa nửa bộ (`dateText` mà quên `startISO`) làm countdown đếm sai ngày mà không báo lỗi.
- **Font mới chưa xem bằng mắt (D28):** "gần giống" chỉ là suy từ ảnh. Script mảnh (Lovers Quarrel) trên nền tối có dải vàng chạy sau có thể khó đọc, đúng loại lỗi Gnuh từng chê ở D18; phần chữ quan trọng nhất (tên người mời) lại dùng nó. Chữ tròn dày của h1 có thể lệch concept sang + vàng đồng (D1): chỉ đổi h1 trước, lệch thì đổi `--display` về Playfair.
- **Nhiều họ font hơn (4: Paytone One, Lovers Quarrel, Playfair, Be Vietnam Pro):** thêm request; nếu mạng chậm thì chữ ẩn đến 1,5 s rồi hiện bằng font dự phòng, font thật vào sau có thể làm nhảy bố cục trên màn một trang không cuộn.
- **Không còn nút Bỏ qua (D32):** mọi lần mở đều phải xem intro (~3,4–4,9 s), kể cả người mở lại. Chỉ xử lý nếu Gnuh thấy phiền; phương án nhẹ là bỏ intro khi `sessionStorage` (không phải localStorage) đã có cờ trong phiên.
- **"Vừa một trang" mới là mục tiêu, chưa phải kết quả (D31):** ước tính tay chiều cao đã từng là điểm rủi ro số 1 ở D22; chỉ số đo ở cổng G3 mới tính. Điện thoại ngắn hoặc có nhiều thanh công cụ là chỗ dễ tràn nhất.
- **Số điện thoại hiển thị công khai (D33):** nếu đưa lên host thật, ai có link đều thấy và bot có thể thu thập.
- **Gỡ nửa chừng gây lỗi ngầm (D30, D32, D33):** `skip` null kẹt dải lụa ở hình intro; `lbl` null ném lỗi; `data-t` thiếu khoá trong `T` làm cả trang mất chữ. Làm theo thứ tự GĐ8 và nhìn console sau mỗi bước.

---

## 10. Prompt cho từng session

Cách dùng: mở chat mới, đính kèm **PLAN + đúng các file trong bảng dưới** (không gửi thừa), dán prompt tương ứng.

| Session | Bắt buộc gửi | Không cần gửi |
|---|---|---|
| S1 tiếp (nếu G1 chưa qua) | `PLAN_thiep_moi.md`, `spike/ribbon.html` + số đo/ảnh HUD | `index.html`, `style.css`, `app.js` |
| S2 | `PLAN_thiep_moi.md`, `spike/ribbon.html` (nguồn để chuyển logic dải lụa sang `app.js`), `index.html`, `style.css`, `app.js` | — |
| S3 | `PLAN_thiep_moi.md`, `index.html`, `style.css`, `app.js` | `spike/ribbon.html` |
| S4 | `PLAN_thiep_moi.md`, `index.html`, `style.css`, `app.js` | `spike/ribbon.html` |
| S5 (GĐ8) | `PLAN_thiep_moi.md`, `index.html`, `style.css`, `app.js`, **ảnh thiệp mẫu** (để đối chiếu font và thông tin) | `spike/ribbon.html` |

Nếu một file code lớn mà session chỉ sửa một phần, Claude sẽ nói rõ ở cuối session phần nào của file nào là liên quan để lần sau có thể chỉ gửi đoạn đó.

### Prompt S1 — Spike dải lụa (GĐ0–1)

```
Mình đang làm web thiệp mời kỉ yếu concept "Dải lụa line-art". Mình đính kèm PLAN_thiep_moi.md. Đọc toàn bộ file trước.

Session này chỉ làm GĐ0–1: tạo cấu trúc thư mục, CONFIG, và spike dải lụa cách B (spike/ribbon.html) theo mục 5, có tham số URL để mình đo nhanh. Chưa làm intro, countdown, nút xác nhận.

Quy tắc: trả lời tiếng Việt, phản biện thẳng nếu thấy điểm yếu (kể cả mô hình toán ở mục 5 nếu thấy không ra hình dải đẹp), sửa tối thiểu, không viết lại cả file nếu không cần. Hướng dẫn mình đo ở mục 7 và chờ mình báo số rồi mới kết luận cổng G1; không tự bịa số.

Khi xong (hoặc trước khi hết ngữ cảnh): cập nhật PLAN_thiep_moi.md (bảng tiến độ, checkbox, mục 2 quyết định, mục 8 số đo, nhật ký mục 11, dòng "Cập nhật lần cuối"), rồi trả lại file PLAN mới + toàn bộ file code đã tạo/sửa, và kết thúc bằng một câu "Việc tiếp theo là ...".
```

### Prompt S2 — Khung tĩnh + Intro (GĐ2–3)

```
Mình đang làm web thiệp mời kỉ yếu. Đính kèm: PLAN_thiep_moi.md và các file code hiện có. Đọc kỹ PLAN, đặc biệt mục 2 (quyết định), mục 4 (ràng buộc), mục 8 (số đo ở S1) và nhật ký mục 11 để biết spike đã chốt cấu hình nào.

Session này chỉ làm GĐ2–3: khung tĩnh + typography + bố cục mobile/desktop, rồi intro. Chỉ bắt đầu nếu cổng G1 trong PLAN đã ghi là qua hoặc được cho qua (D12); nếu chưa, dừng và báo. Nhớ D13 (lưới an toàn hiệu năng) và việc duyệt lại thẩm mỹ.

Quy tắc: tiếng Việt, phản biện thẳng, sửa tối thiểu (dùng sửa đúng chỗ, không viết lại file). Mọi thứ phải có trạng thái cuối là CSS mặc định (intro chỉ là animation về mặc định). Nếu thấy phải vi phạm ràng buộc, dừng và hỏi.

Khi xong (hoặc trước khi hết ngữ cảnh): cập nhật PLAN_thiep_moi.md (bảng tiến độ, checkbox GĐ2–3, quyết định mới, số đo nếu có, nhật ký mục 11, "Cập nhật lần cuối"), trả lại PLAN mới + toàn bộ file code đã sửa, kết thúc bằng một câu "Việc tiếp theo là ...".
```

### Prompt S3 — Countdown + Nút xác nhận (GĐ4–5)

```
Mình đang làm web thiệp mời kỉ yếu. Đính kèm: PLAN_thiep_moi.md và các file code hiện có. Đọc kỹ PLAN (mục 2, 4, 6 GĐ4–5, nhật ký mục 11).

Session này chỉ làm GĐ4–5: countdown odometer rồi nút xác nhận giữ ~1 giây, gồm phương án Enter/Space và liên kết "Không giữ được?". Sau đó cùng mình chạy cổng G2 "độ trống": xem kết quả, đánh giá thẳng nếu trang trống, đề xuất theo đúng thứ tự trong PLAN; chỉ thêm ô nhập tên + gửi khi mình đồng ý.

Quy tắc: tiếng Việt, phản biện thẳng, sửa tối thiểu. Chỉ đọc/sửa phần liên quan trong app.js/style.css, không viết lại cả file.

Khi xong (hoặc trước khi hết ngữ cảnh): cập nhật PLAN_thiep_moi.md (bảng tiến độ, checkbox, quyết định mới gồm kết quả cổng G2, nhật ký mục 11, "Cập nhật lần cuối"), trả lại PLAN mới + toàn bộ file code đã sửa, kết thúc bằng một câu "Việc tiếp theo là ...".
```

### Prompt S4 — Desktop + Hoàn thiện (GĐ6–7)

```
Mình đang làm web thiệp mời kỉ yếu. Đính kèm: PLAN_thiep_moi.md và các file code hiện có. Đọc kỹ PLAN (mục 2, 4, 6 GĐ6–7, mục 9 rủi ro, nhật ký mục 11).

Session này chỉ làm GĐ6–7: tương tác riêng desktop (parallax chuột), xử lý resize/xoay màn hình, rồi hoàn thiện và checklist test. Các mục tuỳ chọn (OG, gộp 1 file, font base64) chỉ làm nếu mình yêu cầu.

Quy tắc: tiếng Việt, phản biện thẳng, sửa tối thiểu. Với kiểm tra ở GĐ7, đưa mình danh sách việc cần tự test trên máy thật và chờ mình báo kết quả; không tự khẳng định đã chạy tốt.

Khi xong (hoặc trước khi hết ngữ cảnh): cập nhật PLAN_thiep_moi.md (bảng tiến độ, checkbox, quyết định mới, mục 8 số đo, nhật ký mục 11, "Cập nhật lần cuối"), trả lại PLAN mới + toàn bộ file code đã sửa, kết thúc bằng tổng kết ngắn những gì còn tồn đọng.
```


### Prompt S5 — Chỉnh theo yêu cầu mới (GĐ8)

```
Mình đang làm web thiệp mời kỉ yếu. Đính kèm: PLAN_thiep_moi.md, ba file code hiện có và ảnh thiệp mẫu. Đọc kỹ PLAN (mục 2 từ D27, bảng 2b, câu hỏi mở 2c, GĐ8, mục 9 rủi ro, nhật ký mục 11).

Session này chỉ làm GĐ8 theo đúng thứ tự trong PLAN: (1) gỡ nút xác nhận + nút Bỏ qua, (2) dữ liệu + số điện thoại, (3) font theo ảnh, (4) bố cục mobile một trang. Nếu mục 2c chưa ghi câu trả lời cho Q1 (ảnh mẫu khác CONFIG ở tên và ngày) thì hỏi mình trước khi sửa dữ liệu.

Quy tắc: tiếng Việt, phản biện thẳng, sửa tối thiểu (sửa đúng chỗ, không viết lại file). Không tự thêm tính năng ngoài GĐ8. Với cổng G3 thì đưa mình danh sách việc tự test trên máy thật và chờ mình báo; test bằng grep/jsdom chỉ ghi là test logic, không phải test trình duyệt.

Khi xong (hoặc trước khi hết ngữ cảnh): cập nhật PLAN_thiep_moi.md (bảng tiến độ, checkbox GĐ8, quyết định mới, nhật ký mục 11, "Cập nhật lần cuối"), trả lại PLAN mới + toàn bộ file code đã sửa, kết thúc bằng một câu "Việc tiếp theo là ...".
```

---

## 11. Nhật ký session (thêm mục mới ở cuối, không sửa mục cũ)

### S0 — 19/11/2026 — Lập plan
- Chốt dữ liệu thiệp (mục 3), bỏ nhạc nền, test localhost, chọn cách B.
- Phản biện brief gốc: (1) ràng buộc "chỉ transform/opacity" mâu thuẫn với intro dashoffset, hội tụ khung và vòng giữ nút → đổi thành 3 ngoại lệ; (2) cách A hoặc cứng hoặc tan hình → chọn B; (3) RSVP không có danh tính thì vô dụng → để tuỳ chọn theo cổng "độ trống"; (4) giữ-1-giây dễ hỏng trên mobile → checklist GĐ5.
- Tên người mời được bổ sung sau khi lập plan: Nguyễn Mạnh Hùng (đã cập nhật D2 và CONFIG).
- Việc tiếp theo: S1 (GĐ0–1).

### S1 — 20/11/2026 — GĐ0–1 (code xong, chưa qua cổng G1)
- Đã làm: cấu trúc thư mục, CONFIG (NFC), bảng màu CSS, spike dải lụa cách B (mô hình mục 5, giữ nguyên công thức), HUD đo fps ngay trong spike, kiểm tra tương phản.
- File đã tạo/sửa: `thiep-moi/index.html` (khung tối thiểu + noscript), `style.css` (bảng màu), `app.js` (CONFIG), `spike/ribbon.html`.
- Quyết định mới: D11 (dải xoay theo cạnh dài trên màn dọc).
- Thiết kế spike: phần `axis`, `W`, `sin θ` chỉ phụ thuộc cột x nên tính 1 lần/cột rồi dùng chung cho mọi đường (JS rẻ; chi phí thật nằm ở raster). Đường gom theo dải |u| thành `g` path (mặc định 5) để đặt opacity tĩnh theo |u|. Nối mượt bằng Q qua điểm giữa. `t` cộng theo dt thật (kẹp 100ms), tab ẩn thì huỷ rAF, quay lại không bù. Intro (`?intro=1`): mỗi đường 1 path `pathLength=1`, t đóng băng, đo phase `intro` riêng, xong mới đổi sang các nhóm và bật loop.
- Tham số URL: `n` (24/32/40), `p` (32/48/60), `fps` (30/60/0=không giới hạn), `g`, `sm` (1=cong, 0=đoạn thẳng), `intro`, `speed`, `rot`, `rm=0` (bỏ qua reduced-motion để đo), `hud=0` (ẩn HUD để duyệt thẩm mỹ). Có nút bấm đổi tham số ở thanh dưới.
- Số đo / kết quả cổng: **chưa có**. Claude chưa chạy trên máy thật, chỉ kiểm cú pháp. HUD tự báo "G1 kỹ thuật đạt/chưa" sau 30 giây (min fps mỗi giây ≥ 55, chỉ xét khi fps cap ≥ 60), nhưng cổng chỉ qua khi Gnuh duyệt thẩm mỹ.
- Vấn đề tồn đọng: HUD đếm số frame rAF thực tế, không thấy được thời gian raster; dùng thêm Performance/FPS meter ở mục 7 nếu số lạ. Chưa kiểm chứng hình dải có đẹp không (mô hình mục 5 chỉ được xác nhận qua toán, chưa qua mắt).
- Việc tiếp theo: Gnuh đo spike (mục 7) và báo số + nhận xét thẩm mỹ để kết luận G1.

### S1b — 20/11/2026 — Số đo đầu tiên (chưa qua G1)
- Gnuh báo số từ ảnh HUD (xem mục 8): TB 54,8 fps, thấp nhất 45, >20 ms 9,1%, tệ nhất 50 ms, giây 26/30, trên bản xem trước nhúng ở PC, dpr 1, 639×609.
- Kết luận: **chưa qua G1**: không phải máy mục tiêu, chưa đủ 30 giây, và min 45 < 55. Đáng lo vì ở cỡ nhỏ và dpr 1 mà đã tụt (JS chỉ 1,67 ms nên nghẽn nằm ở raster/compositing, đúng rủi ro mục 9); Android dpr cao có thể tệ hơn. Chưa kết luận chắc vì iframe xem trước có thể tự kéo fps xuống.
- Thẩm mỹ: Gnuh thấy chưa đẹp, nhưng chưa đánh giá được khi thiếu chữ/khung/scrim. Hai điểm xoắn hiện rõ, hình dải giữ được.
- Sửa: nhãn nút `sm` và `intro` hiện "∞" thay cho 0 (lỗi hiển thị), nay chỉ `fps` hiện ∞.
- Việc tiếp theo: Gnuh mở spike bằng localhost trong tab riêng (không qua bản xem trước), đo lại ≥ 30 giây, rồi đo trên Android; nếu min < 55 thì đi thang dự phòng mục 5 (32 → 24 đường → 30 fps…).

### S1c — 20/11/2026 — Đóng S1
- Gnuh quyết định bỏ qua đo hiệu năng (D12). Mình ghi lại rủi ro thay vì đổi ý: số duy nhất có được là min 45 fps trên PC, nên đây là quyết định chấp nhận rủi ro, không phải kết quả đạt. D13 là lưới an toàn.
- Không sửa code thêm ở S1. Thẩm mỹ để S2 duyệt lại khi có thêm thành phần.
- Việc tiếp theo: S2 (GĐ2–3). Gửi PLAN, `ribbon.html`, `index.html`, `style.css`, `app.js`.

### S2 — 20/11/2026 — GĐ2–3 (code xong, chưa kiểm trên máy thật)
- Đã làm: khung 3 màn (Hero → Thông tin → Xác nhận), CONFIG render ra chữ, tách chữ cái h1/h2, desktop một màn, điện thoại ngang, scrim tĩnh, font, dải lụa chuyển từ spike sang `app.js` (kèm lưới an toàn D13: 40→32→24 đường→30 fps khi TB frame > 20 ms trong 1 giây), intro (dải vẽ dần + khung vẽ dần + chữ hiện từng chữ cái), nút Bỏ qua, reduced-motion (dải đứng yên, không intro).
- File đã sửa: `index.html` (viết lại phần body vì khung cũ rỗng), `style.css` (đổi 1 dòng `html,body` + nối thêm), `app.js` (giữ nguyên CONFIG, nối thêm một IIFE).
- Quyết định mới: D14–D17.
- Số đo / kết quả cổng: **không có**. Mình chỉ kiểm cú pháp JS bằng `node --check`, chưa chạy trên trình duyệt. Chưa biết hình dải + chữ + scrim trông thế nào.
- Vấn đề tồn đọng: (1) thẩm mỹ dải lụa cùng chữ chưa duyệt; (2) màn dọc dải xoay 90° chạy dọc màn hình, dải có thể chạy ngay sau khối chữ, scrim có đủ không phải xem bằng mắt; (3) chữ có dấu chồng (ễ, ạ, ù) có đụng dòng trên không; (4) `resize` giữa lúc intro chỉ dựng lại lớp loop, đường intro giữ hình cũ (chấp nhận); (5) nếu `fonts.googleapis.com` bị chặn thì intro vẫn chạy sau 1,5 giây với font dự phòng; (6) chưa kiểm tra safe-area thật trên iPhone.
- Việc tiếp theo: Gnuh chạy localhost, xem mobile + desktop + xoay ngang, báo nhận xét thẩm mỹ và giật/không; sau đó S3.

### S2b — 20/11/2026 — Đóng S2
- Gnuh duyệt thẩm mỹ dải lụa (phần thẩm mỹ của G1 xong) và bố cục mobile + desktop. Phản hồi duy nhất: font hơi xấu.
- Sửa: đổi font tiêu đề sang Playfair Display, giảm cỡ chữ (D18). File sửa: `index.html` (1 dòng link font), `style.css` (`--serif` + các cỡ chữ). Chưa chạy trên trình duyệt; Gnuh xem lại khi mở S3.
- Còn mở, không chặn S3: "hội tụ ôm khung" chưa thử (D14); hiệu năng Android chưa đo (D12/D13).
- Việc tiếp theo: S3 (GĐ4–5). Gửi PLAN, `index.html`, `style.css`, `app.js`.

### S3 — 20/11/2026 — GĐ4–5 (code xong, test logic bằng jsdom, chưa qua cổng G2)
- Đã làm: countdown odometer (4 đơn vị, cột `[9,0..9]`, ngày co giãn, 3 trạng thái, dòng chữ ẩn cập nhật mỗi phút cho trình đọc màn hình, timer riêng 1 giây canh sát mốc giây, tạm dừng khi tab ẩn); nút giữ xác nhận (vòng dasharray, Enter/Space, link "Không giữ được? Chạm vào đây", chặn callout/contextmenu/chọn chữ, confetti 30 mảnh, lưu localStorage có fallback, dòng ghi chú dev); bỏ khung `.ph`; desktop màn 3 xếp gọn (D22).
- File đã sửa: `index.html` (thay 2 khối giữ chỗ bằng markup thật), `style.css` (xoá rule `.ph`, đổi 1 selector lưới desktop, nối một khối S3), `app.js` (không đụng CONFIG và IIFE S2, nối thêm một IIFE).
- Quyết định mới: D19–D22 (D17 đã thực hiện).
- Số đo / kết quả cổng: không có số đo hiệu năng. Test jsdom 24/24 đạt ở TZ Asia/Ho_Chi_Minh, America/New_York, Asia/Tokyo (kịch bản: 10 s còn lại, 9 ngày 13h30, ngày ≥100 → 3 cột, live, done, tự chuyển before→live qua mốc, 01:00→00:59 gồm trượt 0→9 rồi snap, giữ đủ/nhả sớm, Enter, link thay thế, click `detail=0` và `detail=1`, confetti 30 mảnh rồi gỡ, `?now=` bị bỏ qua ở host thật). Đây **không** phải kiểm tra trình duyệt thật.
- Test lần đầu có 6 lỗi, cả 6 do mình ghi sai kỳ vọng trong bài test (từ 19/11 21:00 đến mốc là 9 ngày chứ không phải 10; mốc wrap lệch; bộ giải mã chưa tính ô đệm). Không có lỗi trong code.
- Vấn đề tồn đọng: (1) **tràn màn desktop** ở laptop thấp (D22), ước tính tay ~730 px nội dung so với ~650 px khả dụng ở 1366×768 trước khi rút gọn; chưa kiểm; nếu tràn thì cắt cả trên lẫn dưới, đây là lỗi nặng; (2) số Playfair có đúng dạng chữ số "đứng" không (D20); (3) vòng tô và giữ bằng ngón tay thật chưa thử, `touch-action:none` làm không cuộn được khi chạm bắt đầu từ nút; (4) ở trạng thái "đã diễn ra" thì "Bạn sẽ đến chứ?" + nút vẫn hiện, **chưa xử lý vì ngoài plan**, cần Gnuh quyết; (5) xác nhận không gửi đi đâu (mục 9): ở bản host thật, dòng "Đã xác nhận / Hẹn gặp bạn…" có thể khiến người nhận tưởng người mời đã biết; (6) cổng G2 chưa chạy.
- Việc tiếp theo: Gnuh xem localhost (mobile + desktop, cả laptop thấp), thử `?now=2026-11-29T10:29:50%2B07:00` để xem trượt số và chuyển trạng thái, rồi trả lời câu hỏi cổng G2; sau đó S4.

### S3b — 20/11/2026 — Gnuh báo kết quả test máy thật (đóng S3)
- Gnuh báo: không overflow ở desktop, nút giữ ổn, countdown ổn. Không nêu cỡ màn hình cụ thể cũng không nêu số đo; mình chỉ ghi đúng những gì bạn báo.
- Gnuh quyết: giữ nguyên "Bạn sẽ đến chứ?" + nút; sẽ tự sửa các thông tin hiển thị. Ghi D26 (G2 đóng, bỏ ô nhập tên).
- Việc tiếp theo: S4.

### S4 — 20/11/2026 — GĐ6–7 (code xong, test jsdom 13/13, GĐ7 chờ Gnuh test máy thật)
- Đã làm: (1) parallax chuột desktop (D23); (2) sửa lỗi resize/xoay ở reduced-motion + bỏ qua resize cùng cỡ (D24); (3) sửa vòng tô nút giữ ở reduced-motion (D25); (4) rà soát tĩnh GĐ7: NFC, dấu rời, noscript, dung lượng, cú pháp; (5) checklist đổi dữ liệu (ghi chú GĐ7).
- File đã sửa: `app.js` (4 chỗ: dòng đầu `tick` lấy `ds` và gọi `par(ds)`; thêm khối parallax sau `start()`; listener `resize` chuyển lên trước nhánh RM và có kiểm cỡ; xoá bản cũ của listener đó), `style.css` (1 dòng cuối: bỏ `.prg` khỏi danh sách tắt transition của reduced-motion). `index.html` không đổi. CONFIG không đụng.
- Quyết định mới: D23–D26.
- Số đo / kết quả cổng: không có số đo hiệu năng mới. jsdom 13/13: parallax lệch ~+13,9/−4,97 px ở góc dưới phải, về 0 sau `mouseleave`, không chạy với `pointerType=touch`, không chạy khi media không phải desktop, `?px=0` tắt; RM không intro/không parallax, resize dựng lại viewBox + khung + xoay 90°; resize cùng cỡ không dựng lại. Bài test chạy trên code gốc thì 3 kiểm tra RM-resize hỏng (xác nhận lỗi D24 là thật). Lần chạy đầu có 6 lỗi, cả 6 do hàm `nums` trong bài test bắt nhầm chữ số của `translate3d`, không phải lỗi code.
- **Cần Gnuh tự test trên máy thật (mình không tự khẳng định đã chạy tốt):** (a) desktop: di chuột xem parallax mượt/vừa mắt, thử `?px=0`, `?px=2` để so; khung lệch ngược có ổn không; chuột ra khỏi cửa sổ thì dải trượt về giữa; có lộ mép dải ở rìa không. (b) kéo đổi cỡ cửa sổ liên tục, thu dưới 900 px (chuyển bố cục mobile), xoay điện thoại dọc↔ngang: dải và khung dựng lại đúng. (c) bật giảm chuyển động của hệ điều hành: không intro, dải đứng yên, vòng tô chạy đủ 1 s khi giữ nút, không confetti, thử xoay/đổi cỡ vẫn đúng. (d) chuyển tab 10 s rồi quay lại: countdown cập nhật ngay, dải không nhảy; đang giữ nút mà chuyển tab thì huỷ. (e) Tab bàn phím qua Bỏ qua → nút giữ → link thay thế: focus ring thấy rõ. (f) mở 5 phút trên điện thoại: có nóng/giật không; nếu đo được thì báo FPS TB/thấp nhất để ghi mục 8. (g) đọc lướt dấu toàn trang: "Kỉ yếu lớp 12A01", "Nguyễn Mạnh Hùng", "Thạch Thất", "Bạn sẽ đến chứ?", "Không giữ được? Chạm vào đây". (h) tương phản chữ đè lên dải (scrim) chỉ đánh giá được bằng mắt.
- Vấn đề tồn đọng: (1) hiệu năng Android vẫn chưa đo (D12/D13); (2) "hội tụ ôm khung" chưa thử (D14); (3) parallax chưa xem bằng mắt; (4) trạng thái "đã diễn ra" vẫn hiện "Bạn sẽ đến chứ?" (Gnuh chọn giữ, D26); (5) xác nhận không gửi đi đâu, rủi ro mục 9 vẫn mở nếu đưa lên host thật; (6) Zalo/Messenger in-app chưa kiểm chứng (cần host); (7) dữ liệu thiệp nằm ở nhiều chỗ, xem checklist đổi dữ liệu.
- Việc tiếp theo: Gnuh test danh sách (a)–(h) và báo lỗi/số đo; nếu có lỗi thì làm S4b sửa, nếu ổn thì chọn có làm các mục tuỳ chọn (OG, gộp 1 file, font base64) hay chốt.

### S4b — 20/11/2026 — Gnuh đổi yêu cầu, cập nhật plan (chưa sửa code)
- Đã làm: ghi 6 yêu cầu của Gnuh (D27); diễn giải thành D28–D34; thêm bảng đối chiếu ảnh mẫu (2b), câu hỏi mở Q1 (2c), GĐ8 kèm cổng G3, CONFIG mục 3 (phone), rủi ro mục 9, file cần gửi + prompt S5 ở mục 10; gắn nhãn **[hết hiệu lực]** vào các mục bị thay (D8, D10, D16, D18, D19, D21, D22, D25, D26, GĐ2/3/5, hai rủi ro cũ, checklist đổi dữ liệu S4).
- File đã sửa: chỉ `PLAN_thiep_moi.md`. `index.html`, `style.css`, `app.js` **không đụng**.
- Quyết định mới: D27–D34.
- Phản biện đã nêu: (1) đảo D26: ở S3b Gnuh chọn giữ nút, nay bỏ, nghĩa là GĐ5 (nút giữ, confetti, localStorage) bị bỏ hẳn; (2) ảnh mẫu khác CONFIG ở tên và ngày → Q1, giữ dữ liệu cũ tới khi Gnuh trả lời; (3) "12:00 AM" trong ảnh là nửa đêm nên không chép; ảnh bỏ dấu vì font script gốc không có tiếng Việt, nên font thay thế phải có; (4) bỏ Bỏ qua thì không thoát được intro; (5) gỡ nửa chừng gây lỗi ngầm (D30, D32, D33), đã ghi rõ chỗ nào trong code.
- Số đo / kết quả cổng: không có. Mình chỉ đối chiếu trang Fontsource để biết font nào có subset tiếng Việt (Paytone One, Lovers Quarrel, Playball); **chưa xem font nào bằng mắt**, và không nhận ra chính xác font gốc của ảnh.
- Vấn đề tồn đọng: Q1; GĐ7 ma trận test máy thật (a)–(h) ở nhật ký S4 vẫn chờ Gnuh, riêng phần liên quan nút giữ ((c) vòng tô, (d) đang giữ nút, (e) Tab qua nút giữ/link thay thế) hết hiệu lực; hiệu năng Android chưa đo (D12/D13); "hội tụ ôm khung" chưa thử (D14); parallax chưa xem bằng mắt (D23).
- Việc tiếp theo: Gnuh trả lời Q1, rồi mở S5 (GĐ8). File cần gửi: `PLAN_thiep_moi.md`, `index.html`, `style.css`, `app.js` và **ảnh thiệp mẫu**; không cần `spike/ribbon.html`.

<!-- Mẫu cho session mới:
### S? — ngày — tên giai đoạn
- Đã làm:
- File đã tạo/sửa:
- Quyết định mới:
- Số đo / kết quả cổng:
- Vấn đề tồn đọng:
- Việc tiếp theo:
-->
# OCR ชุดตัวเลข 10 หลัก → Word

เว็บอ่านชุดตัวเลข 10 หลัก (เช่น เบอร์บนสติกเกอร์ซิม) จากรูปภาพ แล้วส่งออกเป็นไฟล์ Word — ประมวลผลในเบราว์เซอร์ทั้งหมด รูปไม่ถูกอัปโหลดไปที่ไหน

- ใช้งานจริง: https://tepakorn2006-cyber.github.io/ocr-to-word/
- รันในเครื่อง: `npx http-server . -p 8765` แล้วเปิด http://localhost:8765 (เปิดไฟล์ `index.html` ตรง ๆ ไม่ได้)
- ทดสอบ: `node tests/test-pure.js`
- สำหรับ AI/นักพัฒนาที่จะพัฒนาต่อ: อ่าน [AGENTS.md](AGENTS.md)

ตัวอ่าน OCR: PaddleOCR (PP-OCRv4) บน onnxruntime-web · สร้างไฟล์ Word ด้วย JSZip

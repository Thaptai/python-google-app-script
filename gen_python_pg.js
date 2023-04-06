function gen_phthon_png() {
    var p = new python_Obj();
  
    p.presentationId = "https://docs.google.com/presentation/d/1Yz5Q1aB9i87B5ugruO5aWTTrRhPB-JIJdMWqWkeraJA/edit#slide=id.g1232689792b_1_0";
  
    // //ไฟล์ปลายทาง
    docId = "https://docs.google.com/document/d/18511vNslHuZNl0lgilOIe6z9sIDHH2EeeH0z6SQvW_s/edit"; // (โจทย์-รูป)
    doc = { name: "python_figure1", docId: docId };
    p.doc.push(doc);
  
  // //ไฟล์ปลายทาง
    docId = "https://docs.google.com/document/d/14Yadhuxw2wvvY6B9FOtjpTGBbf2xkRF6jIq1vH3-l0Q/edit"; // (โจทย์-รูป)
    doc = { name: "python_list", docId: docId };
    p.doc.push(doc);
  
    p.template_docId = "https://docs.google.com/document/d/1k_IgoDJESZ_Hf8PBbXFzQ60hiQL4pcXgCyohLaygPYE/edit";
  
    p.setImage.width = 500;
    p.setImage.height = p.setImage.width * 3 / 4;
  
    p.prepare();
    var flag = p.get_max_nPNG(500);
    if (flag) return;
  
    var iend = 7;
    for (var i = 0; i < iend; i++) {
      p.newVariable();
      p.newFile();
  
      //p.setPNG("รหัสสไลด์", "adjective1"); //เพิ่มรหัสรูป
      //p.setPNG("g1232689792b_1_0", "python_figure1");
      //p.setPNG("g122b50b4e81_0_0", "python_figure1");
      //p.setPNG("g12919bb80bc_0_0", "python_figure1");
      //p.setPNG("g128ea85f9bc_0_18", "python_figure1");
  
       //p.setPNG("g12cda0257ba_0_0", "python_list");
       //p.setPNG("g12cda0257ba_0_12", "python_list");
      
      p.TrashFile();
    }
  }
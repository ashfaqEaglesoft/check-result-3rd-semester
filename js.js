function checkResult(){
    // get student id 
    stdid=document.forms['rform']['stdid'].value;
    if(stdid==""){
        alert("Please Enter your VU ID");
        return false
    }

    // get cs304 Marks 
    cs304_quiz=document.forms['rform']['cs304_quiz'].value;
    if(cs304_quiz==""){
        alert("Please Enter your cs304_quiz Makrs");
        return false
    }
    cs304_ass=document.forms['rform']['cs304_ass'].value;
    if(cs304_ass==""){
        alert("Please Enter your cs304_ass Makrs");
        return false
    }
    cs304_GDB=document.forms['rform']['cs304_GDB'].value;
    if(cs304_GDB==""){
        alert("Please Enter your cs304_GDB Makrs");
        return false
    }
    cs304_mid=document.forms['rform']['cs304_mid'].value;
    if(cs304_mid==""){
        alert("Please Enter your cs304_mid Makrs");
        return false
    }
    // change type 
    cs304_quiz=Number(cs304_quiz);
    cs304_ass=Number(cs304_ass);
    cs304_GDB=Number(cs304_GDB);
    cs304_mid=Number(cs304_mid);
    cs304_total=cs304_quiz+cs304_ass+cs304_GDB+cs304_mid;
    
    // get cs301 Marks 
    cs301_quiz=document.forms['rform']['cs301_quiz'].value;
    if(cs301_quiz==""){
        alert("Please Enter your cs301_quiz Makrs");
        return false
    }
    cs301_ass=document.forms['rform']['cs301_ass'].value;
    if(cs301_ass==""){
        alert("Please Enter your cs301_ass Makrs");
        return false
    }
    cs301_GDB=document.forms['rform']['cs301_GDB'].value;
    if(cs301_GDB==""){
        alert("Please Enter your cs301_GDB Makrs");
        return false
    }
    cs301_mid=document.forms['rform']['cs301_mid'].value;
    if(cs301_mid==""){
        alert("Please Enter your cs301_mid Makrs");
        return false
    }
    // change type 
    cs301_quiz=Number(cs301_quiz);
    cs301_ass=Number(cs301_ass);
    cs301_GDB=Number(cs301_GDB);
    cs301_mid=Number(cs301_mid);
    cs301_total=cs301_quiz+cs301_ass+cs301_GDB+cs301_mid;
    
    
    // get cs302 Marks 
    cs302_quiz=document.forms['rform']['cs302_quiz'].value;
    if(cs302_quiz==""){
        alert("Please Enter your cs302_quiz Makrs");
        return false
    }
    cs302_ass=document.forms['rform']['cs302_ass'].value;
    if(cs302_ass==""){
        alert("Please Enter your cs302_ass Makrs");
        return false
    }
    cs302_GDB=document.forms['rform']['cs302_GDB'].value;
    if(cs302_GDB==""){
        alert("Please Enter your cs302_GDB Makrs");
        return false
    }
    cs302_mid=document.forms['rform']['cs302_mid'].value;
    if(cs302_mid==""){
        alert("Please Enter your cs302_mid Makrs");
        return false
    }
    // change type 
    cs302_quiz=Number(cs302_quiz);
    cs302_ass=Number(cs302_ass);
    cs302_GDB=Number(cs302_GDB);
    cs302_mid=Number(cs302_mid);
    cs302_total=cs302_quiz+cs302_ass+cs302_GDB+cs302_mid;
    
    
    // get cs601 Marks 
    cs601_quiz=document.forms['rform']['cs601_quiz'].value;
    if(cs601_quiz==""){
        alert("Please Enter your cs601_quiz Makrs");
        return false
    }
    cs601_ass=document.forms['rform']['cs601_ass'].value;
    if(cs601_ass==""){
        alert("Please Enter your cs601_ass Makrs");
        return false
    }
    cs601_GDB=document.forms['rform']['cs601_GDB'].value;
    if(cs601_GDB==""){
        alert("Please Enter your cs601_GDB Makrs");
        return false
    }
    cs601_mid=document.forms['rform']['cs601_mid'].value;
    if(cs601_mid==""){
        alert("Please Enter your cs601_mid Makrs");
        return false
    }
    // change type 
    cs601_quiz=Number(cs601_quiz);
    cs601_ass=Number(cs601_ass);
    cs601_GDB=Number(cs601_GDB);
    cs601_mid=Number(cs601_mid);
    cs601_total=cs601_quiz+cs601_ass+cs601_GDB+cs601_mid;


    // get phy101 Marks 
    phy101_quiz=document.forms['rform']['phy101_quiz'].value;
    if(phy101_quiz==""){
        alert("Please Enter your phy101_quiz Makrs");
        return false
    }
    phy101_ass=document.forms['rform']['phy101_ass'].value;
    if(phy101_ass==""){
        alert("Please Enter your phy101_ass Makrs");
        return false
    }
    phy101_GDB=document.forms['rform']['phy101_GDB'].value;
    if(phy101_GDB==""){
        alert("Please Enter your phy101_GDB Makrs");
        return false
    }
    phy101_mid=document.forms['rform']['phy101_mid'].value;
    if(phy101_mid==""){
        alert("Please Enter your phy101_mid Makrs");
        return false
    }
    // change type 
    phy101_quiz=Number(phy101_quiz);
    phy101_ass=Number(phy101_ass);
    phy101_GDB=Number(phy101_GDB);
    phy101_mid=Number(phy101_mid);
    phy101_total=cs302_quiz+phy101_ass+phy101_GDB+phy101_mid;


    // get opt001 Marks 
    opt001_quiz=document.forms['rform']['opt001_quiz'].value;
    opt001_ass=document.forms['rform']['opt001_ass'].value;
    opt001_GDB=document.forms['rform']['opt001_GDB'].value;
    opt001_mid=document.forms['rform']['opt001_mid'].value;
    // change type 
    opt001_quiz=Number(opt001_quiz);
    opt001_ass=Number(opt001_ass);
    opt001_GDB=Number(opt001_GDB);
    opt001_mid=Number(opt001_mid);
    opt001_total=opt001_quiz+opt001_ass+opt001_GDB+opt001_mid;


    // sum of all subjects marks 
    all_total=cs304_total+cs301_total+cs302_total+cs601_total+phy101_total+opt001_total;

    per_cs304=(cs304_total/115)*100;
    per_cs301=(cs301_total/115)*100;
    per_cs302=(cs302_total/115)*100;
    per_cs601=(cs601_total/115)*100;
    per_phy101=(phy101_total/115)*100;
    per_opt001=(opt001_total/115)*100;

    // subject Wise percentage
    document.write("<h3>CS304 Marks: "+ per_cs304.toFixed(2)+"</h3>");
    document.write("<h3>CS301 Marks: "+ per_cs301.toFixed(2)+"</h3>");
    document.write("<h3>CS302 Marks: "+ per_cs302.toFixed(2)+"</h3>");
    document.write("<h3>CS601 Marks: "+ per_cs601.toFixed(2)+"</h3>");
    document.write("<h3>PHY101 Marks: "+ per_phy101.toFixed(2)+"</h3>");
    if(opt001_total){
        document.write("<h3>PHY101 Marks: "+ per_phy101+"</h3>");
    }
    // overall percentage 
    overallper=(all_total/690)*100;
    document.write("<hr>");
    document.write("<h3>OverAll Percentage: "+ overallper.toFixed(2)+"</h3>");
   
}
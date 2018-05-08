// Categories are general, training, care
var category="knowledge";
var base_url = "qa.html";

Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {

        let c = getQueryString("category", document.location.href);
        if (c != null) {
            category = c;
        }
        console.log(category);
        document.getElementById(category).style.backgroundColor = "#DAE9E4";


        var last_row=2;
        var previous_node=null;


        previous_1=["Yeah Ofc","I don't think so","What a degen... gtfo"]
        previous_2=["Yeah Ofc","Forgot the constant","what's calculus?"];
        previous_3=["Want a scholarship woofie?","It's not well rounded enough","Did it bark the proof tho?"];

        prev_gen_1={"pop":"58K", "text": "Can my doggo have pups with my cat?", "liked":"0", "c1":previous_1}
        prev_gen_2={"pop":"20K", "text": "Can my doggo do integral calculus? Because it barked 0.5x^2 when I said x.", "liked":"0", "c1":previous_2};
        prev_gen_3={"pop":"-1K", "text": "My doggo barked (1/6)pi^2 when I was summing 1+0.25+0.1111+... is he gonna be allright?", "liked":"0", "c1":previous_3};

        comments_1_1=["Yes, I've heard that it's quite nutritious", "No don't, poor doggo", "In certain countries that's a delicacy."];
        comments_1_2=["Yes, he'll help me prove it", "You can't let him publish that paper!","He will just take funding and prove nothing"];
        comments_1_3=["yes quite normal for cats to have higher GPA than their owners", "nah fam", "ofc cats are smart"];

        gen_1={"pop":"10K", "text": "My dog ate his tail, do I let him finish it?", "liked":"1", "c1":comments_1_1};
        gen_2={"pop":"12K", "text": "My turtle said P=NP, anyone want him?", "liked":"0", "c1":comments_1_2};
        gen_3={"pop":"13K", "text": "My cat has a higher GPA than me, is this normal?", "liked":"1", "c1":comments_1_3};

        comments_2_1=["nah he buff af", "what if the poor doggo slips?","nah you gotta watch your 6-o-clock fam"]
        comments_2_2=["cats can't get 6 packs, reported","you gotta give him more creatine","if creatine ain't working hit him with the roids"];
        comments_2_3=["Yes, as of April 2018, check wiki", "Unfortunately, now humans don't have a chance","what's Mr.Atlas?"];
        train_1={"pop":"14K", "text": "My doggo can bench 350lb, do I need to watch him?", "liked":"1", "c1":comments_2_1};
        train_2={"pop":"15K", "text": "My cat can't reach a six-pack after months of training, pless help", "liked":"1", "c1":comments_2_2};
        train_3={"pop":"16K", "text": "Does Mr.Atlas competitions accept turtle competitors?", "liked":"1", "c1":comments_2_3};

        comments_3_1=["ER FAM","he'll live","why do you own a pet?"];
        comments_3_2=["ER FAM","he'll live","why do you own a pet?"];
        comments_3_3=["ER FAM","he'll live","why do you own a pet?"];
        care_1={"pop":"15K", "text": "My dog woke up without a paw, help?", "liked":"1", "c1":comments_3_1};
        care_2={"pop":"16K", "text": "My cat woke up without a paw, help?", "liked":"1", "c1":comments_3_2};
        care_3={"pop":"17K", "text": "My turtle woke up without a paw, help?", "liked":"1", "c1":comments_3_3};
        
        
        var general_know=[prev_gen_1, prev_gen_2,prev_gen_3,gen_1,gen_2,gen_3];
        var training=[train_1,train_2,train_3];
        var care=[care_1,care_2,care_3];

        function get_master_node(index){
            index=index+4
            var master_node=document.getElementById("forum_container").childNodes[index];
            var copy_node=master_node.cloneNode(true);
            previous_node=copy_node;
            return copy_node;
        }

        function new_node(node,i){
            //Prepares to add the new node.
            var previous_id=parseInt(node.id.split("_")[1]);
            node.id="entry_"+(previous_id+1).toString();
            last_row+=1;
            node.style.gridRow=last_row;
            
            var children=node.getElementsByTagName("*");

            var internal_c=1
            var previous_comment=i
            for (var index in children){
                var elt=children[index];
                if (elt.id!=null && elt.id.length>0){
                    var temp=elt.id.split("_");
                    if (temp.length==2 || temp[0]!="c"){
                        if (temp.length==2){
                            var id=temp[0]+"_"+(parseInt(temp[1])+1).toString();
                        }
                        else{
                            var id=temp[0]+"_"+temp[1]+"_"+(parseInt(temp[2])+1).toString();
                        }
                        elt.id=id;
                    }
                    else{
                        var id=temp[0]+"_"+(previous_comment).toString()+"_"+internal_c.toString();
                        internal_c+=1;
                        elt.id=id;
                    }
                }
            }
            return node;
        }
        function apply_data(node,data){
            //data is a dictionary
            var c_counter=1;
            var children=node.getElementsByTagName("*");
            console.log(node);
            var i = parseInt(node.id.replace("entry_",""));
            console.log(i);
            var total_comments=0;
            var curr_index=null;
            var comment_parent=null;
            var comment_child=null;
            for (var index in children){
                var elt =children[index];
                if (elt.id!=null){
                    var temp=elt.id.split("_");
                    if (temp[0]=="comments"){
                        curr_index=temp[1]
                        comment_parent=elt;
                    }
                    if (temp[0]=="c"){
                        total_comments+=1;
                        comment_child=elt.cloneNode(true);
                    }
                }
            }
            if (total_comments!=data["c1"].length){
                while(comment_parent.hasChildNodes){
                    if (comment_parent.childNodes.length==0){
                        break;
                    }
                    comment_parent.removeChild(comment_parent.lastChild)
                }
                for (var index in data["c1"]){
                    comment_parent.appendChild(comment_child);
                    comment_child=comment_child.cloneNode(true);
                }
            }
            
            for (var index in children){
                var elt =children[index];
                
                if (elt.id!=null){
                    var temp=elt.id.split("_");
                    if (temp[0]=="question"){
                        elt.innerText=data["text"];
                    }
                    if (temp[0]=="c"){
                        var temp_c=data["c1"];
                        elt.innerText="User"+c_counter.toString()+":"+temp_c[c_counter-1];
                        c_counter+=1;
                    }
                    if (temp[0]=="pop"){
                        elt.innerText=data["pop"];
                    }
                    if (temp[0]=="up"){
                        elt.addEventListener("click",select);
                    }
                    if (temp[0]=="down"){
                        elt.addEventListener("click",select);
                    }

                    if (temp[0]=="comment"){
                        elt.addEventListener("click", ()=>{toggleComments(i)});
                    }
                    if (temp[0]=="main"){
                        elt.addEventListener("click",dehighlight);
                    }
                    if (temp[0]=="favorite"){
                        elt.addEventListener("click",star_select);
                    }
                }
            }
        }
        function initial_populate(){
            //Use populate category as a subroutine but remmber that you have one inside already for reference
            // consider switching it out in order to have more symmetric code.
            let category_list = general_know;
            if (category == "training") {
                category_list = training;
            } else if (category == "care") {
                category_list = care;
            }
            let forum_container = document.getElementById("forum_container");
            forum_container.style.setProperty("--num_rows",category_list.length+1)
            for (var index=1;index<=category_list.length;index++){
                if (index==1){
                    var node=new_node(get_master_node(index),index);
                    var data=category_list[index-1];
                    apply_data(node,data);
                    forum_container.appendChild(node);

                }
                else{
                    var node=new_node(get_master_node(index+1),index+1)
                    var data=category_list[index-1];
                    apply_data(node,data);
                    //var first_node=new_node(get_master_node(1),1);
                    forum_container.appendChild(node);
                }
            }
            forum_container.children[2].style.display = "none";

        }
        current_category=0
        initial_populate();
        var first_node=get_master_node(1);
        function populate_category(cat_id){
            last_row=2;
            //cat_id=0=>gen,id=1 is training, id=2 is care
            var data_array=[]
            if (cat_id==0){
                data_array=prev_general_know;
                current_category=0;
            }
            if (cat_id==1){
                data_array=training;
                current_category=1;
            }
            if (cat_id==2){
                data_array=care;
                current_category=2;
            }
            
            //Remove old nodes
            var container=document.getElementById("forum_container").childNodes;
            var parent=document.getElementById("forum_container");
            while(parent.hasChildNodes){
                if (parent.childNodes.length==4){
                    break;
                }
                parent.removeChild(parent.lastChild)
            }
            document.getElementById("forum_container").style.setProperty("--num_rows",data_array.length)
            for (var index=1;index<=data_array.length;index++){
                if (index==1){
                    var node=first_node;
                }
                else{
                    var node=new_node(get_master_node(index-2),index);
                }
                var data=data_array[index-1];
                apply_data(node,data);
                document.getElementById("forum_container").appendChild(node);
            }
            Util.one(".up").addEventListener("click",select);
            Util.one(".down").addEventListener("click",select);
            Util.one(".comment").addEventListener("click",highlight);
        }

        function select(event){
            //Check if already selected, o.w deselect
            if (event.path.length==8){
                var elt=event.path[0]
            }
            if (event.path.length==9){
                var elt=event.path[1]
            }
            var color=elt.style.backgroundColor;
            var frag_names=elt.id.split("_");
            if (elt.id.substring(0,2)=="up"){
                //Act on the other button
                var other_button=document.getElementById("down_"+frag_names[1]);
            }
            else{
                var other_button=document.getElementById("up_"+frag_names[1]);
            } 
            if (color!="#ECC7C0"){
                elt.style.backgroundColor="#ECC7C0";
                //make the other button the other color
                other_button.style.backgroundColor="#3C2E3D";
            }
            else{
                elt.style.backgroundColor="#3C2E3D";
                other_button.style.backgroundColor="#ECC7C0";
            }
        }
        function dehighlight(){
            p1=document.getElementById("comment_input").style.display
            p2=document.getElementById("new_question").style.display
            if (p1=="grid" || p2=="grid"){
                document.getElementById("comment_input").style.display="none";
                document.getElementById("new_question").style.display="none";
                document.documentElement.style.setProperty("--opacity",1);
            }
        }
        var current_post=null;
        function highlight(event){
            current_post=event.path;
            for (var x in current_post){
                var string=current_post[x].id;
                if (string!=null && string.length>0){
                    var string=string.split("_");
                    if (string.length>0 && string[0]=="comment"){
                        current_post=parseInt(string[1]);
                        break;
                    }
                }
            }
            p1=document.getElementById("comment_input").style.display
            p2=document.getElementById("new_question").style.display

            if (p1!="grid" && p2!="grid"){
                document.documentElement.style.setProperty("--curr_comment",current_post+1);
                document.getElementById("comment_input").style.display="grid";
                document.getElementById("new_question").style.display="none";
                document.documentElement.style.setProperty("--opacity",0.5);
            }
        }

        function ask_question(){
            p1=document.getElementById("comment_input").style.display
            p2=document.getElementById("new_question").style.display

            if (p1!="grid" && p2!="grid"){
                document.getElementById("comment_input").style.display="none";
                document.getElementById("new_question").style.display="grid";
                document.documentElement.style.setProperty("--opacity",0.5);
                document.getElementById("forum_container").scrollTop=0;
            }
        }
        function post(event){
            //Handle data
            var comment_query=document.getElementsByClassName("your_question")[0].value
            var question_query=document.getElementsByClassName("your_question")[1].value

            var master_data=[prev_general_know,training,care];
            if (comment_query!=""){
                //Comments
                var cat_data=master_data[current_category];
                var data_entry=cat_data[current_post-1];
                data_entry["c1"].push(comment_query);

                if (current_category==0){
                    general();
                }
                if (current_category==1){
                    alpha();
                }
                if (current_category==2){
                    beta();
                }
                
            }
            if (question_query!=""){
                current_category=document.getElementById("selection").options.selectedIndex
                var cat_data=master_data[current_category];
                var new_comment=[]
                var new_entry={"pop":"0", "text": question_query, "liked":"0", "c1":new_comment};
                cat_data.push(new_entry);
                if (current_category==0){
                    general();
                }
                if (current_category==1){
                    alpha();
                }
                if (current_category==2){
                    beta();
                }
                var most=document.getElementById("forum_container").scrollHeight;
                document.getElementById("forum_container").scrollTop=most;
            }
            

            //Change the looks
            dehighlight();
            document.getElementsByClassName("your_question")[0].value="";
            document.getElementsByClassName("your_question")[1].value="";
        }
        function star_select(event){
            current_post=event.path;
            var elt=null;
            for (var x in current_post){
                var string=current_post[x].id;
                if (string!=null && string.length>0){
                    var string=string.split("_");
                    if (string.length>0 && string[0]=="favorite"){
                        elt=current_post[x];
                    }
                }
            }
            
            var color = elt.style.backgroundColor;
            console.log(color)
            if (color != "rgb(139, 203, 200)"){
                elt.style.backgroundColor = "rgb(139, 203, 200)";
                
                elt.childNodes[1].childNodes[1].src = ("img/star.svg");
                
            }
            else{
                elt.style.backgroundColor= "rgb(236, 199, 192)";
                
                elt.childNodes[1].childNodes[1].src = ("img/star_on.svg");
                
            }
        }


        Util.one(".up").addEventListener("click",select);
        Util.one(".down").addEventListener("click",select);

        Util.one("[id='knowledge']").addEventListener("click",()=>{
            window.location.href = "qa.html?category=knowledge";
        });
        Util.one("[id='training']").addEventListener("click", ()=>{
            window.location.href = "qa.html?category=training";
        });
        Util.one("[id='care']").addEventListener("click", ()=>{
            window.location.href = "qa.html?category=care";
        });

        Util.one(".main_text").addEventListener("click",dehighlight);

        Util.one("[id='question_button']").addEventListener("click",ask_question);
            
        Util.one(".post").addEventListener("click",post);
        Util.one(".cancel").addEventListener("click",dehighlight);

        Util.one("[id='f1']").addEventListener("click",post);
        Util.one("[id='f2']").addEventListener("click",dehighlight);

        Util.one(".favorite").addEventListener("click",star_select);

        setupComments();        
	},

	// Keyboard events arrive here
	"keydown": function(evt) {

    },

    // Click events arrive here
	"click": function(evt) {

    },
	"mousedown": function(evt) {

    },
	"mousemove": function(evt) {

    },
	"mouseup": function(evt) {

    }
});
function setupComments() {
    let n = 1;
    let item = document.getElementById("add_1");
    while (item != null) {
        let index = n+0;
        item.addEventListener("click", ()=>{comment(index)});
        n += 1;
        item = document.getElementById("add_"+n);
    }
}

function toggleComments(index) {
    if (Util.one("#comments_"+index).style.display == "none") {
        Util.one("#comments_"+index).style.display = "inline";
    } else {
        Util.one("#comments_"+index).style.display = "none";
    }
    
}
function comment(i) {
    let textbox = Util.one("#text_comment_"+i);
    console.log(i);
    console.log(textbox);
    console.log(textbox.value);
    let c = textbox.value;
    if (c == "") {
        return;
    }
    textbox.value = "";
    let parent = textbox.parentNode.parentNode;
    
    let number = parent.childNodes.length-4;
    let newNode = (parent.childNodes[number]).cloneNode(true);
    // newNode.id = "c_"+i+"_"+number+1;
    newNode.innerHTML = State.getUsername() + ": " + c;
    parent.insertBefore(newNode, parent.childNodes[number+1]);

}  
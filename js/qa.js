Util.events(document, {
	// Final initalization entry point: the Javascript code inside this block
	// runs at the end of start-up when the DOM is ready
	"DOMContentLoaded": function() {
        previous_1=["Yeah Ofc","I don't think so","What a degen... gtfo"]
        previous_2=["Yeah Ofc","Forgot the constant","what's calculus?"]
        previous_3=["Want a scholarship woofie?","It's not well rounded enough","Did it bark the proof tho?"]

        prev_gen_1={"pop":"58K", "text": "Can my doggo have pups with my cat?", "liked":"0", "c1":previous_1}
        prev_gen_2={"pop":"20K", "text": "Can my doggo do integral calculus? Because it barked 0.5x^2 when I said x.", "liked":"0", "c1":previous_2}
        prev_gen_3={"pop":"-1K", "text": "My doggo barked (1/6)pi^2 when I was summing 1+0.25+0.1111+... is he gonna be allright?", "liked":"0", "c1":previous_3}

        comments_1_1=["Yes, I've heard that it's quite nutritious", "No don't, poor doggo", "In certain countries that's a delicacy."]
        comments_1_2=["Yes, he'll help me prove it", "You can't let him publish that paper!","He will just take funding and prove nothing"]
        comments_1_3=["yes quite normal for cats to have higher GPA than their owners", "nah fam", "ofc cats are smart"]

        gen_1={"pop":"10K", "text": "My dog ate his tail, do I let him finish it?", "liked":"1", "c1":comments_1_1}
        gen_2={"pop":"12K", "text": "My turtle said P=NP, anyone want him?", "liked":"0", "c1":comments_1_2}
        gen_3={"pop":"13K", "text": "My cat has a higher GPA than me, is this normal?", "liked":"1", "c1":comments_1_3}

        comments_2_1=["nah he buff af", "what if the poor doggo slips?","nah you gotta watch your 6-o-clock fam"]
        comments_2_2=["cats can't get 6 packs, reported","you gotta give him more creatine","if creatine ain't working hit him with the roids"]
        comments_2_3=["Yes, as of April 2018, check wiki", "Unfortunately, now humans don't have a chance","what's Mr.Atlas?"]
        train_1={"pop":"14K", "text": "My doggo can bench 350lb, do I need to watch him?", "liked":"1", "c1":comments_2_1}
        train_2={"pop":"15K", "text": "My cat can't reach a six-pack after months of training, pless help", "liked":"1", "c1":comments_2_2}
        train_3={"pop":"16K", "text": "Does Mr.Atlas competitions accept turtle competitors?", "liked":"1", "c1":comments_2_3}

        comments_3_1=["ER FAM","he'll live","why do you own a pet?"]
        comments_3_2=["ER FAM","he'll live","why do you own a pet?"]
        comments_3_3=["ER FAM","he'll live","why do you own a pet?"]
        care_1={"pop":"15K", "text": "My dog woke up without a paw, help?", "liked":"1", "c1":comments_3_1}
        care_2={"pop":"16K", "text": "My cat woke up without a paw, help?", "liked":"1", "c1":comments_3_2}
        care_3={"pop":"17K", "text": "My turtle woke up without a paw, help?", "liked":"1", "c1":comments_3_3}
        
        var previous_know=[prev_gen_1,prev_gen_2,prev_gen_3]
        var general_know=[gen_1,gen_2,gen_3];
        var training=[train_1,train_2,train_3]
        var care=[care_1,care_2,care_3]

        
        var initial_cat=0;
        function next(){
            var curr_index=document.getElementById("curr_page").innerText;
            var temp=curr_index.split("/");
            var curr_index=parseInt(temp[0]);
            var total=parseInt(temp[1]);
            
            //general
            var index=0;
            if (curr_index==2){
                var rel=previous_know;
                console.log(rel);
                //Get old
            }
            else{
                //Get new
                if (initial_cat==0){
                    var rel=general_know;
                }
                if (initial_cat==1){
                    var rel=training;
                }
                if (initial_cat==2){
                    var rel=care;
                }
            }
            for (var post in rel){
                index=index+1;
                var main_post=document.getElementById(index.toString());
                index=index+1;
                var comment_1=document.getElementById(index.toString());
                index=index+1;
                var comment_2=document.getElementById(index.toString());
                index=index+1;
                var comment_3=document.getElementById(index.toString());
                var popularity=document.getElementById("pop"+(index/4).toString())

                main_post.innerText=rel[post]["text"];
                popularity.innerText=rel[post]["pop"];
                var comments=rel[post]["c1"];
                comment_1.innerText=comments[0];
                comment_2.innerText=comments[1];
                comment_2.innerText=comments[2];
            }
            if (initial_cat==0){
                if (curr_index==1 ){
                    document.getElementById("curr_page").innerText="2/2";
                }
                else{
                    document.getElementById("curr_page").innerText="1/2";
                }
            } 
            else{
                document.getElementById("curr_page").innerText="1/1";
            }
        }

        function select(event){
            //Check if already selected, o.w deselect
            if (event.path.length==8){
                var elt=event.path[0]
            }
            if (event.path.length==9){
                var elt=event.path[1]
                console.log(elt.id);
            }
            var color=elt.style.backgroundColor;
            if (elt.id.substring(0,2)=="up"){
                //Act on the other button
                var other_button=document.getElementById("down_"+elt.id.substring(elt.id.length-1));
            }
            else{
                var other_button=document.getElementById("up_"+elt.id.substring(elt.id.length-1));
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
        function alpha(){
            initial_cat=1;
            //document.getElementById("curr_page").innerText="1/1";
            console.log("train");
            document.getElementById("training").style.backgroundColor="#FDAE84";
            document.getElementById("knowledge").style.backgroundColor="white";
            document.getElementById("care").style.backgroundColor="white";
            next();
        }
        function beta(){
            initial_cat=2;
            //document.getElementById("curr_page").innerText="1/1";
            console.log("care");
            document.getElementById("care").style.backgroundColor="#FDAE84";
            document.getElementById("training").style.backgroundColor="white";
            document.getElementById("knowledge").style.backgroundColor="white";
            next();
        }
        function general(){
            //Change the coloring of the button
            initial_cat=0;
            console.log("general");
            document.getElementById("knowledge").style.backgroundColor="#FDAE84";
            document.getElementById("training").style.backgroundColor="white";
            document.getElementById("care").style.backgroundColor="white";
            next();
            
        }

        

        Util.one("[id='up_1']").addEventListener("click",select);
        Util.one("[id='down_1']").addEventListener("click",select);
        Util.one("[id='up_2']").addEventListener("click",select);
        Util.one("[id='down_2']").addEventListener("click",select);
        Util.one("[id='up_3']").addEventListener("click",select);
        Util.one("[id='down_3']").addEventListener("click",select);

        Util.one("[id='left_button']").addEventListener("click",next);
        Util.one("[id='right_button']").addEventListener("click",next);

        Util.one("[id='knowledge']").addEventListener("click",general);
        Util.one("[id='training']").addEventListener("click",alpha);
        Util.one("[id='care']").addEventListener("click",beta);

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
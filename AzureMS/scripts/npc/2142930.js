var status;
function start() {
    status = -1;
    action(1, 1, 0);
}

function action(mode, type, selection) {
    if (mode < 0)
        cm.dispose();
    else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("GM Item Giver");
        } else if (status == 1) {
            //Hat
            cm.gainItem(1002140,1);
            cm.gainItem(1003539, 1);
            cm.gainItem(1003890, 1);
            //LongCoat
            cm.gainItem(1042003,1);
            cm.gainItem(1051351, 1);
            cm.gainItem(1052624, 1);
            //Pants
            cm.gainItem(1062007, 1);
            //Shoes
            cm.gainItem(1072663,1);
            cm.gainItem(1072830,1);
            //Weapon
            cm.gainItem(1322013, 1);
            cm.gainItem(1702943, 1);
            cm.gainItem(1702565, 1);
            //Cape
            cm.gainItem(1103206,1);
            cm.gainItem(1103210,1);


            cm.sendOk("Here's your item GM.");
            cm.dispose();
            } else {
                cm.sendOk("GoodBye.");
                cm.dispose();
            }
        }
    }
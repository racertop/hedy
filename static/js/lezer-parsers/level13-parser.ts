// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
const spec_Text = {__proto__:null,is:12, at:28, random:30, ask:38, clear:42, print:46, call:50, with:52, forward:60, turn:64, color:68, sleep:72, add:76, to:78, remove:82, from:84, if:88, pressed:94, not:98, in:100, and:102, or:104, repeat:110, times:112, for:116, range:118, define:122, return:126, else:132}
export const parser = LRParser.deserialize({
  version: 14,
  states: "2YQYQPOOOOQO'#Dq'#DqQYQPOOO!aQPO'#DuO!uQPO'#DnOOQO'#Cx'#CxOOQO'#C_'#C_Q![QPO'#DrQ$UQPOOOOQO'#Cp'#CpO$]QPO'#CtO$bQPO'#CrO$bQPO'#CyO$bQPO'#C{O$bQPO'#C}O$pQPO'#DPO%XQPO'#DRO%XQPO'#DUO%gQPO'#DdO%oQPO'#DgO%tQPO'#DjO$bQPO'#DlO&wQPO'#DoO%XQPO'#DXOOQO-E7o-E7oOOQO'#Cc'#CcO'RQPO,58zOOQO'#Du'#DuOOQO-E7s-E7sO'aQPO,5:^OOQO-E7p-E7pO(kQPO,59`O(pOQO'#CfO(xQPO'#DxOOQO'#Cd'#CdO*bQPO'#CdOOQO'#Dx'#DxO+zQPO,59^O,cQPO,59eOOQO,59e,59eO,zQPO,59gOOQO,59g,59gO-cQPO,59iOOQO,59i,59iO-zQPO,59kOOQO,59k,59kO.cQPO,59mO.tQPO,59mO.yQPO,59pO/[QPO,59pO/aQPO,5:OO/fQPO,5:RO/kQPO,5:UO/yQPO,5:WOOQO'#Dc'#DcOOQO,5:Z,5:ZO0bQPO'#D[O0|QPO'#D[OOQO'#DZ'#DZO1[QPO,59sO1lQPO'#DsO2^QPO1G.rO2eQPO'#CdOOQO'#Ds'#DsO2oQPO1G.fO3TQPO1G.rO3]QPO1G.tO3]QPO1G.zOOOO'#Dt'#DtO3hOQO,59QOOQO,59Q,59QOOQO'#Cg'#CgOOQO'#Ch'#ChO3pQPO,5:oO3pQPO,5:oO3{QPO,59TOOQO-E7v-E7vO4TQPO1G/XO4YQPO1G/[O%yQPO1G/jO4_QPO1G/mO3]QPO1G/pO4gQPO,59vO4xQPO,59xO4}QPO,59xO5SQPO1G/_O%XQPO'#DzOOQO1G/_1G/_O5dQPO1G/_OOQO'#Cm'#CmO5oQPO'#DvO5wQPO7+$^OOQO-E7q-E7qO6VQPO'#DwOOQO'#Dw'#DwO6wQPO7+$`O7]QPO'#EZOOQO'#EZ'#EZO9cQPO'#CwOOQO7+$f7+$fOOOO-E7r-E7rOOQO1G.l1G.lOOQO1G0Z1G0ZO;]QPO1G0ZOOQO1G.o1G.oOOQO7+$s7+$sOOQO7+$v7+$vOOQO7+%U7+%UOOQO7+%X7+%XO=cQPO7+%XOOQO7+%[7+%[O=kQPO1G/bOOQO1G/b1G/bOOQO1G/d1G/dO?UQPO1G/dOOQO-E7x-E7xOOQO7+$y7+$yO?ZQPO7+$yOOQO,5:f,5:fO?fQPO,5:bOOQO,5:b,5:bOOQO-E7t-E7tOOQO-E7u-E7uO3]QPO'#DyO?wQPO,59cOAqQPO<<HsOOQO7+%O7+%OOOQO<<He<<HeOOQO,5:e,5:eOOQO-E7w-E7wOAvQPOAN>_OOQOG23yG23y",
  stateData: "BR~OPOS!qOS~OTROeXOgZOiYOn[Op]Or^Ot_Ov`OyaO|gO!XbO![cO!_dO!aeO!dfO!rPO~OUjO!siOT!iX!o!iX!r!iX!d!iX~OTkO!o!bX!r!bX!d!bX~OTROeXOgZOiYOn[Op]Or^Ot_Ov`OyaO!XbO![cO!_dO!aeO!dfO~O|gO~P#TOToO~OTsOXrOiYO!tpO~OTsOXrOiYO!tpO!osX!rsX!dsX~OTrOXrOiYO!tpO~OT!SOX!SO~OT!TO~OT!UO~OTROeXOgZOiYOn[Op]Or^Ot_Ov`OyaO!XbO![cO!_dO!aeO~O!o!cX!r!cX~P%yOT!`OX!_Oc!dO!tpO~O!rPOT!fae!fag!fai!fan!fap!far!fat!fav!fay!fa|!fa!X!fa![!fa!_!fa!a!fa!d!fa!o!fa~Oj!eO~O!u!fO!v!hO~O!x!iO!y!iO!z!jO!{!jOT!lXX!lXi!lX!o!lX!r!lX!t!lX!d!lX~O^!mOTWXXWX!oWX!rWX!tWX!xWX!yWX!zWX!{WX!dWX~OiWX!|WXwWXzWXUWX!RWX!SWX!sWXeWXgWXnWXpWXrWXtWXvWXyWX!TWX!UWX!XWX![WX!_WX!aWX~P)mOTsOXrOiYO!tpO!ofa!rfa!dfa~O!x!iO!y!iO!z!jO!{!jO!oma!rma!dma~O!x!iO!y!iO!z!jO!{!jO!ooa!roa!doa~O!x!iO!y!iO!z!jO!{!jO!oqa!rqa!dqa~O!x!iO!y!iO!z!jO!{!jO!osa!rsa!dsa~Ow!oO!x!iO!y!iO!z!jO!{!jO~Ow!oO~Oz!pO!x!iO!y!iO!z!jO!{!jO~Oz!pO~O!Y!qO~O!S!rO~Oj!sO!o!^a!r!^a!d!^a~OTsOXrOiYO!tpO!o!`a!r!`a!d!`a~OU!tO!R!vO!S!uO!siO!x!iO!y!iO!z!jO!{!jO~OU!tO!R!vO!S!uO!siO~O!T!xO!U!xO!o{a!r{a~P#TO!x!iO!y!iO!z!jO!{!jOT!gXX!gX!o!gX!r!gX!t!gX!d!gX~O!|!{O~P)pOT!iX!|!iX~P)mOTsOXrO!tpO!oSi!rSi!dSi~OTkO!|!{O~OTsOXrO!tpO~O!u!fO!v#XO~OTrOXrO!tpO~OT#[O_#[O~OT#]O~OT#^O~OT#`O!]#aO~OTrOXrOiYO!P#dO!tpO~OT#eO~O!S#fO~O!T!xO!U!xO!o{i!r{i~P#TO!dfO!o{i!r{i~OTkOX#lO~O!|!{O!o`q!r`q!d`q~O!x!iO!y!iO!z!jO!{!jOT!kXX!kX!o!kX!r!kX!t!kX!d!kX~OTsOXrO!tpO!obq!rbq!dbq~O!x!iO!y!iO!z!jO!{!jO!o!}X!r!}X!|!}XT!}XX!}Xi!}X!t!}Xw!}Xz!}XU!}X!R!}X!S!}X!s!}X!d!}Xe!}Xg!}Xn!}Xp!}Xr!}Xt!}Xv!}Xy!}X!T!}X!U!}X!X!}X![!}X!_!}X!a!}X~O!|!{O!okX!rkXTkXXkXikX!tkXwkXzkXUkX!RkX!SkX!skX!dkXekXgkXnkXpkXrkXtkXvkXykX!TkX!UkX!XkX![kX!_kX!akX~O!x!iO!y!iO!z!jO!{!jOT!wiX!wii!wi!o!wi!r!wi!t!wiw!wiz!wiU!wi!R!wi!S!wi!s!wi!|!wie!wig!win!wip!wir!wit!wiv!wiy!wi!T!wi!U!wi!X!wi![!wi!_!wi!a!wi!d!wi~OT#qOX#qO~O!x!iO!y!iO!z!jO!{!jOT!Oie!Oig!Oii!Oin!Oip!Oir!Oit!Oiv!Oiy!Oi!T!Oi!U!Oi!X!Oi![!Oi!_!Oi!a!Oi!d!Oi!o!Oi!r!Oi~OT#rO~O!dfO!o{q!r{q~OTkO!o!ja!r!ja!|!ja!d!ja~O!|!{O!oka!rkaTkaXkaika!tkawkazkaUka!Rka!Ska!ska!dkaekagkankapkarkatkavkayka!Tka!Uka!Xka![ka!_ka!aka~Ow#vO~OT#wOX#wO~OXT~",
  goto: "*t#OPPP#P#UPP#a#hP$l%U%e%tPP#U&e#UP#UP#UP&nPP'j#U'pP'pP'pP#UP#UPP#UPP'yP(O(UP(UPPPP(Y#UPP#UPP#UP#UP#U(fP(u)P)W)^)d)x*P*V*a*gPPPPPPPP$lPPPPP*mVVOQWUUOQWX!Wf!]!q!wQjRT!t!Y!ZWqZeu!VQv[Qx]Qz^Q|_Q!O`Q!QaS!Yg!xS!^j!bS#P!d#RU#S!e!s#oQ#Y!kQ#Z!lR#c!t}rZ[]^_`aegju!V!b!d!e!k!l!s!t!x#R#ok!kqvxz|!O!Q!Y!^#P#S#Z#ck!lqvxz|!O!Q!Y!^#P#S#Z#cWtZeu!VQw[Qy]Q{^Q}_S!aj!bS#Q!d#RV#T!e!s#oU!|!_!c!}T#o#U#pUUOQWWtZeu!VQw[Qy]Q{^Q}_Q!P`Q!RaW!Wf!]!q!wS!Zg!xR#d!tQ#V!eR#b!s_TOQWf!]!q!wVUOQWQ!]gR#j!xT![g!xQ!XfQ!z!]Q#_!qR#i!wUUOQWQ!y!]S#h!w!zR#s#iQQOShQmRmVSWOQRnWQ!bjR#O!bQ!gpR#W!g^SOQWf!]!q!wUlS!c#kQ!cjR#k!|S!}!_!cR#m!}Q#R!dR#n#RQuZQ!VeT!nu!VQ#p#UR#u#pQ!w!]R#g!wS#U!e!sR#t#o",
  nodeNames: "⚠ Comment Program Command Assign Text is Op Expression Number String Op Op ListAccess at random AssignList Op Ask ask Clear clear Print print Call call with Arguments Turtle Forward forward Turn turn Color color Sleep sleep Add add to Remove remove from If if Condition EqualityCheck pressed ListCheck not in and or IfLessCommand Repeat repeat times For for range Define define Return return ErrorInvalid Else else",
  maxTerm: 91,
  nodeProps: [
    ["group", 28,"turtle"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 10,
  tokenData: "(o~RiOY!pYZ#wZp!ppq#|qs!pst$Rtw!pwx$jxz!pz{$o{|$t|}$y}!O%O!O!P!p!P!Q%T!Q![%Y![!_!p!_!`(j!`#Q!p#RBn!pBo&FV!p&FW;'S!p;'S;=`#q<%l?Hb!p?HcO!p~!u^T~OY!pZp!pqs!ptw!pxz!p!O!P!p!Q!_!p!`#Q!p#RBn!pBo&FV!p&FW;'S!p;'S;=`#q<%l?Hb!p?HcO!p~#tP;=`<%l!p~#|O!r~~$RO!q~~$WSP~OY$RZ;'S$R;'S;=`$d<%lO$R~$gP;=`<%l$R~$oO!t~~$tO!x~~$yO!z~~%OO!|~~%TO!{~~%YO!y~~%a_X~T~OY!pZp!pqs!ptw!pxz!p!O!P&`!Q![%Y![!_!p!`#Q!p#RBn!pBo&FV!p&FW;'S!p;'S;=`#q<%l?Hb!p?HcO!p~&e_T~OY!pZp!pqs!ptw!pxz!p!O!P!p!Q!['d![!_!p!`#Q!p#RBn!pBo&FV!p&FW;'S!p;'S;=`#q<%l?Hb!p?HcO!p~'k_X~T~OY!pZp!pqs!ptw!pxz!p!O!P!p!Q!['d![!_!p!`#Q!p#RBn!pBo&FV!p&FW;'S!p;'S;=`#q<%l?Hb!p?HcO!p~(oO!s~",
  tokenizers: [1, new LocalTokenGroup("_~RQYZXwxX~^O!v~~", 14, 83)],
  topRules: {"Program":[0,2]},
  dynamicPrecedences: {"64":-10},
  specialized: [{term: 5, get: (value: any) => spec_Text[value] || -1}],
  tokenPrec: 1518
})
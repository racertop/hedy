// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
const spec_Text = {__proto__:null,random:16, is:20, input:40, clear:52, print:56, forward:62, turn:66, color:70, sleep:74, add:78, to:80, remove:84, from:86, if:90, pressed:96, not:112, in:114, and:116, or:118, repeat:126, times:128, for:132, range:134, def:138, return:142, while:146, elif:150, else:156}
export const parser = LRParser.deserialize({
  version: 14,
  states: "9[QYQPOOOOQO'#D}'#D}QYQPOOO!dQPO'#EVO#OQPO'#C`OOQO'#Cy'#CyO#WQPO'#DzOOQO'#C_'#C_Q!_QPO'#EOQ$jQPOOOOQO'#Cu'#CuO$qQPO'#CwO$vQPO'#CzO$vQPO'#C|O$vQPO'#DOO%RQPO'#DQO$vQPO'#DSO$vQPO'#DVO%gQPO'#DlO%oQPO'#DoO%tQPO'#DrO$vQPO'#DtO%yQPO'#DvO%yQPO'#DxO&UQPO'#D{O%yQPO'#DYOOQO-E7{-E7{OOQO'#Cc'#CcO&ZQPO,58|OOQO'#Cg'#CgO&cQPO,58zOOQO'#Cq'#CqO&tQPO,59_O'SQPO,58zOOQO'#EV'#EVOOQO-E8T-E8TO'_QPO,5:jOOQO-E7|-E7|O&tQPO,59cO)vQPO'#ChO)}OQO'#CjO*VQPO,59fOOQO'#Ch'#ChOOQO,59f,59fO*nQPO,59hOOQO,59h,59hO+VQPO,59jOOQO,59j,59jO+nQPO,59lOOQO,59l,59lO,VQPO,59nO,hQPO,59nO,mQPO,59qO-OQPO,59qO-TQPO,5:WO-YQPO,5:ZO$qQPO,5:^O-_QPO'#EUOOQO'#EU'#EUO.PQPO,5:`O/]QPO'#ChO0OQPO'#D_O/gQPO'#D_OOQO'#D['#D[O0`QPO,5:bO0`QPO,5:dOOQO'#Dj'#DjO1lQPO,5:gO0`QPO,59tO1vQPO1G.hO1{QPO'#ChO2fQPO'#EPO3WQPO1G.fO3lQPO1G.sO$qQPO1G.uO3tQPO'#EiOOQO'#Ct'#CtOOQO1G.y1G.yO&}QPO1G.yOOQO'#Ei'#EiO4YQPO'#CrOOQO1G.}1G.}O&}QPO1G.}OOOO'#EQ'#EQO4bOQO,59UOOQO,59U,59UOOQO'#Ck'#CkOOQO'#Cl'#ClO'SQPO,5:|O'SQPO,5:|O4jQPO1G/YO4oQPO1G/]O0kQPO1G/rO4tQPO1G/uO&tQPO1G/xOOQO-E8S-E8SO4|QPO,59wO5RQPO,59yOOQO'#Da'#DaO$vQPO,59zOOQO'#Dc'#DcOOQO'#Dd'#DdO5RQPO,59|O$vQPO,59yO5aQPO,5:PO5fQPO,5:PO0`QPO1G/|O%yQPO'#ETOOQO1G/|1G/|O0`QPO1G0OOOQO1G0O1G0OOOQO'#Dk'#DkOOQO1G0R1G0RO0`QPO1G/`O5kQPO1G/`OOQO'#Ce'#CeOOQO7+$S7+$SOOQO-E7}-E7}O5uQPO7+$_O&tQPO7+$aOOQO7+$e7+$eOOQO'#Cn'#CnO$vQPO'#ESO5zQPO,59^OOQO7+$i7+$iOOOO-E8O-E8OOOQO1G.p1G.pOOQO1G0h1G0hO6SQPO1G0hOOQO7+$t7+$tOOQO7+$w7+$wOOQO7+%^7+%^O&UQPO7+%aO$qQPO7+%aO&UQPO7+%dO&}QPO7+%dOOQO1G/c1G/cO7pQPO1G/eOOQO1G/e1G/eO$vQPO1G/eO8XQPO1G/fOOQO1G/f1G/fO8pQPO1G/hOOQO1G/h1G/hO$vQPO1G/hOOQO1G/k1G/kO9XQPO1G/kOOQO-E8R-E8ROOQO7+%h7+%hOOQO,5:o,5:oOOQO7+%j7+%jO9^QPO7+$zOOQO7+$z7+$zO9hQPO7+$zO9sQPO'#ERO9{QPO<<GyOOQO<<G{<<G{O&}QPO<<G{OOQO,5:n,5:nOOQO-E8Q-E8QOOQO<<H{<<H{O:TQPO<<H{OOQO<<IO<<IOO&UQPO<<IOO:]QPO7+%POOQO7+%P7+%PO:tQPO7+%SOOQO7+%S7+%SOOQO7+%V7+%VOOQO<<Hf<<HfO;]QPO<<HfOOQO,5:m,5:mOOQO-E8P-E8POOQOAN=eAN=eOOQOAN=gAN=gO5uQPOAN>gOOQOAN>jAN>jOOQOAN>QAN>QO;hQPOG24RO;pQPOLD)mO&UQPO!$'MXO;xQPO!$'MXOOQO!)9Bs!)9BsO&}QPO!)9BsO&UQPO!.K8_OOQO!4/-y!4/-y",
  stateData: "<T~OPOS!|OS~OTROjYOlZOo[Oq]Os^Ou_Ow`OzaO}iO!abO!dcO!gdO!ieO!kfO!mgO!phO!}PO~OYnO#OkO#QmO#[oOT!yX!z!yX!}!yX!p!yX~OYqO#QmO~OTrO!z!nX!}!nX!p!nX~OTROjYOlZOo[Oq]Os^Ou_Ow`OzaO!abO!dcO!gdO!ieO!kfO!mgO!phO~O}iO~P#fO#[oO~OTwO]zO#RxO~OTwO]zO#RxO!ztX!}tX!ptX~OT!WO]!WO~OT!XO~OT!YO~OT!^O]zO#RxO~O#b!dO~OT!gOW!gO~OT!hO]zOd!lO#OkO#RxO~OTwO]zO#RxO#^!nO~OT!hO]zO#RxO~O!}POT!raj!ral!rao!raq!ras!rau!raw!raz!ra}!ra!a!ra!d!ra!g!ra!i!ra!k!ra!m!ra!p!ra!z!ra~O#OkO!z[X!}[X#V[X#W[X#X[X#Y[Xx[X{[XT[X][X#R[X#Z[X#^[X![[X!][X#b[X!p[X~O#[oO~P(lO#S!uO#T!wO~O#V!xO#W!xO#X!yO#Y!yO!zna!}na!pna~O#V!xO#W!xO#X!yO#Y!yO!zpa!}pa!ppa~O#V!xO#W!xO#X!yO#Y!yO!zra!}ra!pra~O#V!xO#W!xO#X!yO#Y!yO!zta!}ta!pta~Ox!|O#V!xO#W!xO#X!yO#Y!yO~Ox!|O~O{!}O#V!xO#W!xO#X!yO#Y!yO~O{!}O~O!b#OO~O!Z#PO~O#V!xO#W!xO#X!yO#Y!yOT!xX]!xX!z!xX!}!xX#R!xX!p!xX~OTwO]zO#RxO!z!ha!}!ha!p!ha~O#OkOY[X!Y[X!Z[X#Q[X#V[X#W[X#X[X#Y[X#_[X#`[X#a[X~OY#SO#[oO~P.eOY#ZO!Y#]O!Z#[O#QmO#_#UO#`#WO#a#XO~O#V!xO#W!xO#X!yO#Y!yO~P/gO![#_O!]#_O#b!dO~OTROjYOlZOo[Oq]Os^Ou_Ow`OzaO!abO!dcO!gdO!ieO!kfO!mgO~O!z!oa!}!oa~P0kO#P#gO~OY[X!Y[X!Z[X#Q[X#_[X#`[X#a[X~P(lO#V!xO#W!xO#X!yO#Y!yOT!sX]!sX!z!sX!}!sX#R!sX!p!sX~OT!hO]zO#RxO!zSi!}Si!pSi~O]#jO#RxO~O#V!xO#W!xO#X!yO#Y!yO#Z#]X#^#]X~O#Z#mO#^fX~O#S!uO#T#rO~OT#uO~OT#vO~OT#xO!e#yO~O!Q#|O~OTwO]zO#QmO#RxO~OT$VO~O!Z$WO~O!z|i!}|i~P#fO#Z#mO~O#Z#mO#^fa~O#V!xO#W!xO#X!yO#Y!yO!z#Ui!}#Uix#Ui{#UiT#Ui]#Ui#R#UiY#Ui!Y#Ui!Z#Ui#Q#Ui#_#Ui#`#Ui#a#Ui#Z#Ui#^#Ui![#Ui!]#Ui#b#Ui!p#Ui~O#V!xO#W!xO#X!yO#Y!yO![!Ri!]!Ri#b!Ri~O#V!xO#W!xO#X!yO#Y!yO![!Si!]!Si#b!Si~O#V!xO#W!xO#X!yO#Y!yO![!Ui!]!Ui#b!Ui~OT$nO~O!z|q!}|q~P#fO!phO!z|q!}|q~O]$qO#RxO~O#P#gO#Z#mO~OT$uO]$uO~O#V!xO#W!xO#X!yO#Y!yO![!Rq!]!Rq#b!Rq~O#V!xO#W!xO#X!yO#Y!yO![!Uq!]!Uq#b!Uq~O!phO!z|y!}|y~OT$yO]$yO~O#Z#mO#^!nO~OT$}O]$}O~O]T~",
  goto: "/S#^PPP#_#dP#o$hP$qP$w%XP&i'_'q#d(T#dP(c(t)Q*b#dP#dP#d+QP+QP+QP#dP#dPP#dPP+ZP+`+lP+l+l+r+l+v+v+lPPPP+z,p#dPP#dPP#dP#dP#dP#dP#d,|P-]-g-n-u-{.R.X.g.mPPPPPPPPPP#xPPPPPP.yVWOQXUVOQXX#c!e#O#f$]^SOQX!e#O#f$]!Zz[]^_`aefginpqv!]!j!z!{#Q#T#V#Y#Z#_#k#n$P$UWlRw!^!hR!knQ#h!gR$s$aQnRQqSS#T!_!`Q$P#TR$U#YQy[Q|]Q!O^Q!Q_Q!S`Q!UaS!Ze!]W!_fgi#_U!inq!jY!mpv#Q#k#nQ#s!zQ#t!{S#}#T#ZQ$Q#VQ$S#YQ$j$PR$l$U!Yz[]^_`aefginpqv!]!j!z!{#Q#T#V#Y#Z#_#k#n$P$UQ#j!kR$q$`q!zy|!O!Q!S!U!Z!_!i!m#t#}$Q$S$j$lq!{y|!O!Q!S!U!Z!_!i!m#t#}$Q$S$j$lS#n!r#oS$`#j$aQ$x$uR${$yUpRw!^QvZQ#Q!YQ#k!lR$g#yQ!ppQ!tvQ#{#QR$c#kUVOQXQ{[Q}]Q!P^Q!R_Q!T`Q!VaS![e!]W!`fgi#_Y!qpv#Q#k#nW#c!e#O#f$]S$O#T#ZQ$R#VQ$T#YQ$k$PR$m$UQ!opQ!svQ#l!pQ#p!tQ#z#QQ$b#kQ$i#{Q$t$cQ$z$yR%O$}_TOQX!e#O#f$]VVOQXQ!bfQ!cgQ!fiR$Z#_X!afgi#_T#V!_!`T#Y!_!`Q!ehQ#`!bQ#b!cQ#f!fQ$Y#^Q$[#aQ$]#eQ$f#xQ$h#zQ$v$iQ$|$zR%P%OQ#d!eQ#w#OQ$_#fR$p$]UVOQXQ$^#fS$o$]$_R$w$pQQOSjQtRtWSXOQRuXS!jnqR#i!jQ!vxR#q!vQ$a#jR$r$aQ#o!rR$e#oQ#^!bQ#a!cQ#e!fV$X#^#a#eQ!]eR#R!]^UOQX!e#O#f$]RsUW!rpv#Q#kR$d#n",
  nodeNames: "⚠ Comment Program Command Assign Text ListAccess Op random Op is Op Expression Number String Op Op AssignList Op Input input Op Arguments Call Op Clear clear Print print Turtle Forward forward Turn turn Color color Sleep sleep Add add to Remove remove from If if Condition PressedCheck pressed EqualityCheck NotEqualCheck Op ComparisonCheck Op Op ListCheck not in and or Op IfLessCommand Repeat repeat times For for range Define def Return return While while Elif elif ErrorInvalid Else else",
  maxTerm: 110,
  nodeProps: [
    ["group", 29,"turtle"]
  ],
  skippedNodes: [0,1],
  repeatNodeCount: 9,
  tokenData: "*[~RqOY#YYZ$dZp#Ypq$iqr$nrs#Yst$ytw#Ywx%bxy%gyz%lz{%q{|%v|}%{}!O&Q!O!P#Y!P!Q&V!Q![&[![!])l!]!^#Y!^!_)q!_!`)v!`!a){!a!}#Y!}#O*Q#O#P#Y#P#Q*V#RBn#YBo&FV#Y&FW;'S#Y;'S;=`$^<%l?Hb#Y?HcO#Y~#__T~OY#YZp#Yrs#Ytw#Y!O!P#Y!Q![#Y!]!^#Y!a!}#Y#O#P#Y#RBn#YBo&FV#Y&FW;'S#Y;'S;=`$^<%l?Hb#Y?HcO#Y~$aP;=`<%l#Y~$iO!}~~$nO!|~~$qP!_!`$t~$yO#_~~%OSP~OY$yZ;'S$y;'S;=`%[<%lO$y~%_P;=`<%l$y~%gO#R~~%lO#[~~%qO#^~~%vO#V~~%{O#X~~&QO#Z~~&VO#Y~~&[O#W~~&c_]~T~OY#YZp#Yrs#Ytw#Y!O!P'b!Q![&[!]!^#Y!a!}#Y#O#P#Y#RBn#YBo&FV#Y&FW;'S#Y;'S;=`$^<%l?Hb#Y?HcO#Y~'g_T~OY#YZp#Yrs#Ytw#Y!O!P#Y!Q![(f!]!^#Y!a!}#Y#O#P#Y#RBn#YBo&FV#Y&FW;'S#Y;'S;=`$^<%l?Hb#Y?HcO#Y~(m_]~T~OY#YZp#Yrs#Ytw#Y!O!P#Y!Q![(f!]!^#Y!a!}#Y#O#P#Y#RBn#YBo&FV#Y&FW;'S#Y;'S;=`$^<%l?Hb#Y?HcO#Y~)qO#b~~)vO#a~~){O#Q~~*QO#`~~*VO#O~~*[O#P~",
  tokenizers: [1, new LocalTokenGroup("_~RQYZXwxX~^O#T~~", 14, 96)],
  topRules: {"Program":[0,2]},
  dynamicPrecedences: {"76":-10},
  specialized: [{term: 5, get: (value: any) => spec_Text[value] || -1}],
  tokenPrec: 1244
})
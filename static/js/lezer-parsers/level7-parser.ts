// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {specializeKeyword, extendKeyword} from "./tokens"
export const parser = LRParser.deserialize({
  version: 14,
  states: "3nQYQPOOOOQO'#De'#DeQYQPOOO!TQPO'#DkO!iQPO'#DcOOQO'#Dq'#DqO!wQPO'#DRO#VQPO'#DSOOQO'#Dr'#DrO#eQPO'#DUOOQO'#Ds'#DsO#pQPO'#DVOOQO'#Dt'#DtO#{QPO'#DWOOQO'#DT'#DTOOQO'#Du'#DuO$WQPO'#DXOOQO'#Dv'#DvO$lQPO'#DYOOQO'#Dx'#DxO$tQPO'#DZOOQO'#Dz'#DzO$|QPO'#D[OOQO'#EO'#EOO%UQPO'#DbOOQO'#EQ'#EQO&UQPO'#DdOOQO'#Ct'#CtQ!OQPO'#DfQ&`QPOOOOQO-E7c-E7cOOQO'#Dg'#DgO&gQPO,59aOOQO'#Cw'#CwO&uQPO,59aOOQO'#Dk'#DkOOQO-E7i-E7iOOQO-E7o-E7oO'QQPO'#DnOOQO'#Cx'#CxO(gQPO'#CxO(qOSO'#E]O(yOQO'#EaOOQO'#DQ'#DQOOQO'#Dn'#DnO)RQPO,59nO)jQPO,59pOOQO-E7p-E7pOOQO,59p,59pO*RQPO,59qOOQO-E7q-E7qOOQO,59q,59qO*jQPO,59rOOQO-E7r-E7rOOQO,59r,59rO+RQPO,59sOOQO-E7s-E7sOOQO,59s,59sOOQO-E7t-E7tO+jQPO,59tOOQO-E7v-E7vO+oQPO,59uOOQO-E7x-E7xO+tQPO'#D^OOQO'#D]'#D]O,PQPO,59vOOQO-E7|-E7|O,ZQPO,59|OOQO'#Da'#DaOOQO-E8O-E8OOOQO,5:O,5:OO,`QPO,5:QOOQO-E7d-E7dOOQO-E7e-E7eO-^QPO'#DhO-{QPO1G/TO.SQPO'#CxOOQO'#Dh'#DhO.^QPO1G.{O.oQPO1G/TOOQO'#Dm'#DmO.wQPO1G/VOOQO'#Cz'#CzOOQO'#C{'#C{O/YQPO,5:rO/YQPO,5:rOOQO'#Di'#DiO/bQPO,59hOOOO'#Do'#DoO/mOSO,5:wOOQO,5:w,5:wOOOO'#Dp'#DpO/uOQO,5:{OOQO,5:{,5:{OOQO-E7l-E7lOOQO'#Dw'#DwO/}QPO1G/`OOQO'#Dy'#DyO0VQPO1G/aO0_QPO,59xOOQO'#D|'#D|O0sQPO,59yOOQO'#D}'#D}O0{QPO,59zOOQO1G/b1G/bO1TQPO1G/bOOQO'#EP'#EPO1`QPO1G/hO2^QPO'#DlO2fQPO7+$oOOQO-E7f-E7fOOQO-E7k-E7kO2tQPO7+$qOOQO1G0^1G0^O3]QPO1G0^OOQO-E7g-E7gOOQO'#Dj'#DjO4mQPO1G/SOOQO1G/S1G/SOOOO-E7m-E7mOOQO1G0c1G0cOOOO-E7n-E7nOOQO1G0g1G0gOOQO-E7u-E7uOOQO7+$z7+$zOOQO-E7w-E7wOOQO7+${7+${O6SQPO1G/dOOQO'#D{'#D{O6dQPO1G/dOOQO1G/d1G/dOOQO-E7z-E7zOOQO1G/e1G/eOOQO-E7{-E7{OOQO1G/f1G/fOOQO7+$|7+$|OOQO-E7}-E7}OOQO7+%S7+%SO6kQPO,5:WOOQO,5:W,5:WOOQO-E7j-E7jOOQO-E7h-E7hOOQO-E7y-E7y",
  stateData: "7P~OfOS!wOS~OSeOUiOVVOWWOXYOY[OZ_O]aO_cOaTOdgOjRO!xPO~O[oO!yqOj!_X!u!_X!x!_XU!_X~OjsO!u!VX!x!VXU!VX~OaTO!uuX!xuXUuX~OjxOmwO#QyO#UzO~OWWOjxOmwO~OXYOjxOmwO~OY[OjxOmwO~OZ_OjxOmwO!u{X!x{XU{X~O]aOj!]O~O_cOj!_O~OSeOj!aO~OdgOj!eOm!eO~OUiOVVOWWOXYOY[OZ_O]aO_cOaTOdgOjRO~O!u!WX!x!WX~P%aOSeO~P%aOP!rO[oOj!nOm!mO~OP!rOj!nOm!mO~O!{!tO!|!tO!}!uO#O!uOj!bXm!bX!u!bX!x!bX#Q!bX#U!bXU!bX~OQ!xOjlXmlX!ulX!xlX!{lX!|lX!}lX#OlXUlX~O#QlX#UlX~P'uO#R!zO#S!|O~O#V!}O#W#PO~OjxOmwO#QyO#UzO!uva!xvaUva~O!{!tO!|!tO!}!uO#O!uO!uxa!xxaUxa~O!{!tO!|!tO!}!uO#O!uO!uya!xyaUya~O!{!tO!|!tO!}!uO#O!uO!uza!xzaUza~O!{!tO!|!tO!}!uO#O!uO!u{a!x{aU{a~O`#RO~O^#TO~O[oOb#WOc#YO~O!u!Oa!x!Oa~P%aOe#^O~O!xPOS!YaU!YaV!YaW!YaX!YaY!YaZ!Ya]!Ya_!Yaa!Yad!Yaj!Ya!u!Ya~O!{!tO!|!tO!}!uO#O!uOj![Xm![X!u![X!x![XU![X~Or#`O~P'xOj!_Xr!_X~P'uOjxOmwO!uii!xiiUii~OjsOr#`O~OP!rOjxOmwO#QyO#UzO~OjwOmwO~OQ!xOR#hOj#jO~O#R!zO#S#lO~O#V!}O#W#nO~O`#ROj#pO~O^#TOj#rO~OT#tO[oOjwOmwO#QyO#UzO~Ob#WOj#xO~Oc#YOj#zO~OUiO!u!Oi!x!Oi~OVVOWWOXYOY[OZ_O]aO_cOaTOdgOe#^OjRO!u!Ui!x!UiU!Ui~OjsOm$PO~Or#`O!uqq!xqqUqq~OjxOmwO#QyO#UzO!usq!xsqUsq~O!{!tO!|!tO!}!uO#O!uOj!zim!zi!u!zi!x!zi#Q!zi#U!ziU!ziV!ziW!ziX!ziY!ziZ!zi]!zi_!zia!zid!zi~OR#hOjpimpi!upi!xpi#Qpi#UpiUpi~OU!QiV!QiW!QiX!QiY!QiZ!Qi]!Qi_!Qia!Qid!Qij!Qi!u!Qi!x!Qi~O!{!tO!|!tO!}!uO#O!uO~P5XOT#tO~P5XOjsOr!`a!u!`a!x!`aU!`a~Omj~",
  goto: ",Q#UPPPPPPPPPPPPPPPPPPPPPPPP#V#[P#f#iP$Z$e$o#[P#[%W#[#[#[%a%a%a#[#[#[%i%n%q%q%q%t#[#[%}&Y&d&k&u&|'T'Z'o'v'}(X(_(e(p({)W)c)n)y*P*[*b*j*p*v*|+X+_PPPPP+iPPPP+yPPP+yVlOQmUkOQmV!fj!c#_RrRWvV}!s#dQ!OXQ!RZQ!U]Q!X`U!lpr!pQ#e!vQ#f!wR#s#Va!vv!O!R!U!X!l#f#sa!wv!O!R!U!X!l#f#sW|V}!s#dQ!QXQ!TZQ!W]Q!Z`V!opr!pW|V}!s#dR#v#V]^OQjm!c#_VkOQmR!cfR!bfQ!hjQ#]!cR#}#_UkOQmQ#[!cR#{#]QQOSnQ!iR!ilSmOQR!jmQpRS!kp#VR#V!aS!pprR#b!pS!yx!nR#g!yQ#i!yR$R#i[SOQjm!c#_UtS!q$OS!qprR$O#`S#a!m!qR$Q#aS!sprR#c!sQ}VS#Q}#dR#d!sQ!{yR#k!{Q#OzR#m#O[UOQjm!c#_RuU[XOQjm!c#_R!PX[ZOQjm!c#_R!SZ[]OQjm!c#_R!V][`OQjm!c#_R!Y`[bOQjm!c#_R![bQ#S!]R#o#S[dOQjm!c#_R!^dQ#U!_R#q#UUfOQmR!`fQ#u#VR$S#uQ#X!aR#w#XQ#Z!aR#y#Z[hOQjm!c#_R!dhQ#_!eR#|#_YjOQm!c#]R!gjmwVXZ]`pr}!p!s!v!w#V#dZ{V}!s#V#d",
  nodeNames: "⚠ ask at random if pressed else print forward turn color sleep is add from remove to_list clear in not_in repeat times Comment Program Command Assign Text Op Expression Int Op Op ListAccess AssignList Comma Ask String Clear Print Turtle Forward Turn Color Sleep Add Remove If Condition EqualityCheck InListCheck NotInListCheck IfLessCommand Repeat ErrorInvalid Else",
  maxTerm: 100,
  nodeProps: [
    ["group", 39,"turtle"]
  ],
  skippedNodes: [0,22],
  repeatNodeCount: 28,
  tokenData: "*x~R!^OY$}YZ&UZp$}pq&Zqr$}rs&`st&etw$}wx&|xz$}z{'R{|'W|}']}!O'b!O!P$}!P!Q'g!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!_!`*s!`#Q$}#RBn$}BnBo']BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FV&FW']&FW;'S$};'S;=`&O<%l?Hb$}?Hb?Hc']?HcO$}~%S^j~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!_$}!`#Q$}#RBn$}Bo&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~&RP;=`<%l$}~&ZO!x~~&`O!w~~&eO#Q~~&jSf~OY&eZ;'S&e;'S;=`&v<%lO&e~&yP;=`<%l&e~'RO#U~~'WO!{~~']O!}~~'bOr~~'gO#O~~'lO!|~~'s!Om~j~OY$}Zp$}qr$}tw$}xz$}!O!P$}!Q!R'l!R!S'l!S!T'l!T!U'l!U!V'l!V!W'l!W!X'l!X!Y'l!Y!Z'l!Z!['l![!_$}!`#Q$}#RBn$}BoDf$}DfDg'lDgDh'lDhDi'lDiDj'lDjDk'lDkDl'lDlDm'lDmDn'lDnDo'lDoDp'lDpGl$}GlGm'lGmGn'lGnGo'lGoGp'lGpGq'lGqGr'lGrGs'lGsGt'lGtGu'lGuGv'lGv&FV$}&FW;'S$};'S;=`&O<%l?Hb$}?HcO$}~*xO!y~",
  tokenizers: [2, new LocalTokenGroup("_~RQYZXwxX~^O#W~~", 14, 99), new LocalTokenGroup("_~RQYZXrsX~^O#S~~", 14, 95)],
  topRules: {"Program":[0,23]},
  dynamicPrecedences: {"53":-10},
  specialized: [{term: 26, get: (value: any, stack: any) => (specializeKeyword(value, stack) << 1), external: specializeKeyword},{term: 26, get: (value: any, stack: any) => (extendKeyword(value, stack) << 1) | 1, external: extendKeyword, extend: true}],
  tokenPrec: 1010
})
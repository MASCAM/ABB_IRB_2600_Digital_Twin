MODULE MainModule
	TASK PERS tooldata TTW5500:=[TRUE,[[32.6913,0.134845,384.969],[1,0,0,0]],[1,[0,0,100],[1,0,0,0],0,0,0]];
	CONST robtarget p0:=[[1070.72,0.12,1495.04],[0.707302,6.63484E-05,0.706911,0.00014344],[0,-1,0,1],[9E+09,1.3,-1.3,9E+09,9E+09,9E+09]];
	CONST robtarget p10:=[[1334.07,581.72,1463.94],[0.692758,-0.144315,0.691684,0.144337],[0,0,-1,1],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p20:=[[808.75,1.18,1964.28],[0.860147,-0.000215655,0.510046,0.000732159],[0,0,0,1],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p30:=[[1431.82,0.96,1070.91],[0.59353,-5.24599E-05,0.804812,0.000296626],[0,0,0,1],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p40:=[[1332.36,1.15,1833.24],[0.920381,-0.000377778,0.391022,0.000278627],[0,-1,0,1],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p50:=[[1332.23,0.66,1158.22],[0.447835,-0.000265241,0.894116,-0.000118751],[0,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p60:=[[1327.67,-308.98,1348.28],[0.373918,-0.235367,0.75868,-0.478741],[0,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p70:=[[1353.69,-31.99,1186.92],[0.300356,-0.663222,0.599651,-0.332178],[0,-1,-2,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p80:=[[1359.46,1.49,1193.21],[0.485459,0.000360736,0.874259,0.00104621],[0,0,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p90:=[[1000,330,1500],[0.485456,0.000361031,0.87426,0.00104479],[0,-1,0,0],[9E+09,45,-45,9E+09,9E+09,9E+09]];
	CONST robtarget p100:=[[1000,-330.01,1500],[0.48546,0.000361393,0.874258,0.00104574],[-1,0,-1,0],[9E+09,-45,45,9E+09,9E+09,9E+09]];
	CONST robtarget p110:=[[1000,-330.01,1000],[0.485459,0.00036163,0.874259,0.00104771],[-1,0,-1,0],[9E+09,-45,45,9E+09,9E+09,9E+09]];
	CONST robtarget p120:=[[1000,330,1000],[0.485457,0.000362817,0.87426,0.00104558],[0,-1,0,0],[9E+09,45,-45,9E+09,9E+09,9E+09]];
	CONST robtarget p130:=[[759.44,2.58,1015.40],[0.267136,0.00140019,0.963656,-0.00200401],[0,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p140:=[[759.44,2.58,1015.40],[0.382367,0.00138131,0.924004,-0.00301768],[0,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p150:=[[759.44,2.58,1015.40],[0.358829,0.112046,0.884668,-0.275771],[0,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p160:=[[759.44,2.58,1015.40],[0.00596391,-0.181395,-0.903361,0.388587],[0,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p170:=[[759.44,2.58,1015.40],[0.202431,-0.279142,-0.936178,0.0683594],[-1,-1,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p180:=[[759.43,2.58,1015.40],[0.187951,-0.300288,-0.89722,-0.263626],[-1,0,0,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p190:=[[759.44,2.58,1015.40],[0.10784,0.0293424,0.909151,0.40119],[-1,0,-1,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
	CONST robtarget p200:=[[759.44,2.58,1015.40],[0.399155,-0.0740057,0.833164,0.375546],[-1,0,-1,0],[9E+09,0,0,9E+09,9E+09,9E+09]];
    CONST robtarget p210:=[[1359.46,1.49,1193.21],[0.485459,0.000360736,0.874259,0.00104621],[0,0,0,0],[9E+09,-90,0,9E+09,9E+09,9E+09]];
    CONST robtarget p220:=[[1359.46,1.49,1193.21],[0.485459,0.000360736,0.874259,0.00104621],[0,0,0,0],[9E+09,-90,90,9E+09,9E+09,9E+09]];
    
    CONST jointtarget j1 := [ [ -35, -18.2, 45.2, -30, -78.9, 31.8], [9E+09,1.3,-1.3,9E+09,9E+09,9E+09] ];
    CONST jointtarget j2 := [ [ -35, -18.2, 45.2, 30, -78.9, 31.8], [9E+09,1.3,-1.3,9E+09,9E+09,9E+09] ];
    
    
    CONST speeddata v_or:=[100,10,100,100] ;
    CONST speeddata vj:=[1000,150,100,100] ;
    CONST speeddata vj2:=[300,50,100,100] ;
    
    
	PROC main()
		juntas;
        WaitTime 10;
		square;
        WaitTime 10;
		orient;
        WaitTime 10;
        bye;
	ENDPROC
	PROC juntas()
        ActUnit STN1;
		MoveJ p10, v300, fine, TTW5500;
		MoveJ p0, v300, fine, tool0;
		MoveJ p20, v300, fine, TTW5500;
		MoveJ p0, v300, fine, tool0;
		MoveJ p30, v300, fine, TTW5500;
		MoveJ p0, v300, fine, tool0;
		MoveJ p40, v300, fine, TTW5500;
		MoveJ p50, v300, fine, TTW5500;
		MoveJ p60, v300, fine, TTW5500;
		MoveJ p50, v300, fine, TTW5500;
		MoveJ p70, v300, fine, TTW5500;
        MoveJ p50, v300, fine, TTW5500;
        MoveJ p210, v_or, fine, TTW5500;
        MoveJ p220, v_or, fine, TTW5500;
		MoveJ p50, v_or, fine, TTW5500;
		MoveJ p0, v300, fine, tool0;
	ENDPROC
	PROC square()
        ActUnit STN1;
		MoveJ p80, v300, fine, TTW5500;
		MoveJ p90, v300, fine, TTW5500;
		MoveL p100, v300, fine, TTW5500;
		MoveL p110, v300, fine, TTW5500;
		MoveL p120, v300, fine, TTW5500;
		MoveL p90, v300, fine, TTW5500;
		MoveJ p80, v300, fine, TTW5500;
		MoveJ p0, v300, fine, tool0;
	ENDPROC
	PROC orient()
        ActUnit STN1;
		MoveJ p80, v300, fine, TTW5500;
		MoveJ p130, v_or, fine, TTW5500;
		MoveJ p140, v_or, fine, TTW5500;
		MoveL p150, v_or, fine, TTW5500;
		MoveL p160, v_or, fine, TTW5500;
		MoveL p170, v_or, fine, TTW5500;
		MoveL p180, v_or, fine, TTW5500;
		MoveL p190, v_or, fine, TTW5500;
		MoveL p200, v_or, fine, TTW5500;
		MoveJ p80, v_or, fine, TTW5500;
		MoveJ p0, v300, fine, tool0;
	ENDPROC
    PROC bye()
        MoveJ p80, v300, fine, TTW5500;
        MoveAbsj j1,vj2,fine,TTW5500;
        MoveAbsj j2,vj,fine,TTW5500;
        MoveAbsj j1,vj,fine,TTW5500;
        MoveAbsj j2,vj,fine,TTW5500;
        MoveAbsj j1,vj,fine,TTW5500;
        MoveAbsj j2,vj,fine,TTW5500;
        MoveAbsj j1,vj,fine,TTW5500;
        MoveAbsj j2,vj,fine,TTW5500;
        MoveAbsj j1,vj,fine,TTW5500;
        MoveAbsj j2,vj,fine,TTW5500;
        MoveAbsj j1,vj,fine,TTW5500;
        stop;
        MoveJ p0, v300, fine, tool0;
        
    ENDPROC
ENDMODULE
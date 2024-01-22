import Menubar from "../MenuBar/MenuBar_Admin"
import Card from "@mui/material/Card"
import Typography from '@mui/material/Typography';
import { useState } from "react";


export default function FAQ() {
    
    const ContainerStyle = {
        display : 'flex',
        flexDirect : 'row'
      }

  const [visibility, setVisibility] = useState({});
 //---------------------------------------------------//
  const handleToggleVisibility = (id) => {
    setVisibility({
      ...visibility,
      [id]: !visibility[id],
    });
  };

  const [active, setActive] = useState({});

  const toggleActive = (id) => {
    setActive({
      ...active,
      [id]: !active[id],
    });
  };



    return(
        <div class = "main" style={ContainerStyle}>
            <Menubar/>

            <Card sx={{ width: 1500 ,
            mt : 2 ,
            ml : 3 ,
            pt : 2 ,
            pl : 2 , 
          }}>
            <Typography variant="h5" component="div" 
            sx={{fontSize: 35 , p:2}}>
                FAQ / คำถามที่พบบ่อยของแต่ละหน่วยงาน
            </Typography>
            <Typography variant="h5" component="div" 
            sx={{fontSize: 18 , p:2}}>
                <fieldset align = "center"> เดี๋ยวตรงนี้หารูปภาพมาใส่ดีกว่า </fieldset> 
            </Typography>

      
            <div className="layerPadding">
          <div className="container" style={{ paddingTop: "2%" }}>
            <div className="count" style={{ paddingBottom: "3%" }}>
            </div>

            {/* คำถามฝ่ายที่ 1 */}
            <div>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element1") &
                    toggleActive("element1")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายวิชาการ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element1") &
                      toggleActive("element1")
                    }
                  >
                    {active.element1 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element1 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col-sm-10">
                      เนื่องจากเป็นอีเมลที่ใช้ภายในมหาวิทยาลัย
                      ทำให้ไม่สามารถที่จะให้ผู้ใช้ภายนอกมหาวิทยาลัย
                      สามารถสมัครใช้งานได้แต่ถ้าเป็นกรณีที่เป็นนักศึกษาใหม่
                      จะมีการเปิดให้ลงทะเบียนตามช่วงเวลา
                      ซึ่งจะเปิดให้ลงทะเบียนหลังจากที่นักศึกษาได้รับบัตรนักศึกษา
                      และมีบัญชีบนเว็บไซต์ newAcis เรียบร้อยแล้ว
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 2 */}
            <div style={{ marginTop: "2%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element2") &
                    toggleActive("element2")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายปกครอง
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element2") &
                      toggleActive("element2")
                    }
                  >
                    {active.element2 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element2 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      ในส่วนของการรีวิวสามารถแบ่งหมวดหมู่ออกมาได้ดังนี้
                      วิชาเรียน อาจารย์ หอพัก ร้านอาหาร ที่ฝึกงาน
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 3 */}
            <div style={{ marginTop: "2%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element3") &
                    toggleActive("element3")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายบริการ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element3") &
                      toggleActive("element3")
                    }
                  >
                    {active.element3 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element3 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      เชื่อถือได้แน่นอน
                      เพราะคนที่สามารถตอบคำนั้นจะเป็นนักศึกษาภายในมหาวิทยาลัยและบุคลากรภายในเท่านั้น
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 4 */}
            <div style={{ marginTop: "2%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element4") &
                    toggleActive("element4")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ศูนย์สารสนเทศ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element4") &
                      toggleActive("element4")
                    }
                  >
                    {active.element4 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element4 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      แค่มีอีเมลสกุล @mail.kmutt.ac.th หรือ @kmutt.ac.th
                      และทำการสมัครสมาชิกเพื่อเข้าสู่ระบบ
                      คุณก็สามารถเข้าไปดูและเขียนรีวิวในเว็บไซต์ได้เลย
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 5 */}
            <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element5") &
                    toggleActive("element5")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายบัญชี
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element5") &
                      toggleActive("element5")
                    }
                  >
                    {active.element5 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element5 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 6 */}
            <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element6") &
                    toggleActive("element6")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายพัสดุ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element6") &
                      toggleActive("element6")
                    }
                  >
                    {active.element6 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element6 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 7 */}
            <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element7") &
                    toggleActive("element7")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายโภชนาการ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element7") &
                      toggleActive("element7")
                    }
                  >
                    {active.element7 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element7 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 8 */}
            <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element8") &
                    toggleActive("element8")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : หลักสูตร English Program
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element8") &
                      toggleActive("element8")
                    }
                  >
                    {active.element8 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element8 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 9 */}
            <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element9") &
                    toggleActive("element9")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ห้องเรียนโครงการพิเศษ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element9") &
                      toggleActive("element9")
                    }
                  >
                    {active.element9 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element9 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


            {/* คำถามฝ่ายที่ 10 */}
            <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element10") &
                    toggleActive("element10")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายธุรการ
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element10") &
                      toggleActive("element10")
                    }
                  >
                    {active.element10 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element10 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>


          {/* คำถามฝ่ายที่ 11 */}
          <div style={{ marginTop: "2%", paddingBottom: "1.5%" }}>
              <div className="row">
                <div
                  className="homeHeader3 col"
                  onClick={() =>
                    handleToggleVisibility("element11") &
                    toggleActive("element11")
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  คำถามที่พบบ่อย : ฝ่ายกิจการนักเรียน
                </div>
                <div className="col-1">
                  <button
                    type="button"
                    className="float-end iconButton"
                    onClick={() =>
                      handleToggleVisibility("element11") &
                      toggleActive("element11")
                    }
                  >
                    {active.element11 ? (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-up svg"
                      />
                    ) : (
                      <img
                        src={require("../logo.svg").default}
                        alt="arrow-down svg"
                      />
                    )}
                  </button>
                </div>
              </div>
              <div style={{ paddingBottom: "0.75%" }}>
                {visibility.element11 && (
                  <div
                    className="row body"
                    style={{ paddingTop: "1%", paddingBottom: "1%" }}
                  >
                    <div className="col-sm-1">คำตอบ : </div>
                    <div className="col">
                      สามารถใช้งานได้ ถ้าหากว่าคุณสามารถเข้าถึงอีเมลสกุล
                      @mail.kmutt.ac.th หรือ @kmutt.ac.th ได้
                    </div>
                  </div>
                )}
              </div>
              <hr />
            </div>
          </div>
        </div>
      </Card>
      </div>
    );
                }

import React, { useState } from "react";
import { useFileManager } from "../components/Context";
import Files from "../components/Files";
import DatePicker from "react-datepicker";
import { RSelect } from "../../../../components/Component";
import { Row, Col, Button } from "reactstrap";

const Recovery = () => {
  const [dates, setDates] = useState({
    from: new Date(),
    to: new Date(),
  });

  const { fileManager } = useFileManager();

  const selectOptions = [];
  fileManager.data.users.forEach((item) => {
    selectOptions.push({
      id: item.id,
      value: item.name,
      label: item.name,
    });
  });

  const files = [...fileManager.files.filter((item) => item.deleted)];

  return (
    <>
      <Row>
        <Col xl="3" className="order-xl-12">
          <div className={`nk-fmg-filter toggle-expand-content ${fileManager.recoveryFilter ? "expanded" : ""}`}>
            <form>
              <Row>
                <Col lg="12" md="4">
                  <div className="form-group">
                    <label className="form-label">От</label>
                    <div className="form-control-wrap">
                      <DatePicker
                        selected={dates.from}
                        onChange={(date) => setDates({ ...dates, from: date })}
                        className="form-control date-picker"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg="12" md="4">
                  <div className="form-group">
                    <label className="form-label">К</label>
                    <div className="form-control-wrap">
                      <DatePicker
                        selected={dates.to}
                        onChange={(date) => setDates({ ...dates, to: date })}
                        className="form-control date-picker"
                      />
                    </div>
                  </div>
                </Col>
                <Col lg="12" md="4">
                  <div className="form-group">
                    <label className="form-label">Удален кем</label>
                    <div className="form-control-wrap">
                      <RSelect options={selectOptions} />
                    </div>
                  </div>
                </Col>
                <Col lg="12">
                  <div className="d-flex justify-between mt-1">
                    <button type="reset" className="link link-sm link-primary ms-n1">
                      Сбросить фильтр
                    </button>
                    <Button color="primary" size="sm">
                      Фильтр
                    </Button>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Col>
        <Col xl="9" lg="12">
          <Files files={files} fixedView="list" page="recovery" />
        </Col>
      </Row>
    </>
  );
};

export default Recovery;

import { Container, Row, Col, BreadcrumbItem, Breadcrumb } from "reactstrap";
import { Link } from "react-router-dom";
import {H3 } from '../../AbstractElements';
import SvgIcon from "../../Utils/CommonComponents/CommonIcons/CommonSvgIcons";

 interface propsTypes {
  title: any;
  parent: string;
  pageTitle: any;
}

function Breadcrumbs(props: propsTypes) {
  const { parent = '', title = '', pageTitle = '' } = props;
  return (
      <Container fluid={true}>
        <div className="page-title">
          <Row>
            <Col sm={6} className="p-0">
              <H3>{pageTitle}</H3>
            </Col>
            <Col sm={6} className="p-0">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to={`${process.env.PUBLIC_URL}/dashboard/default`}>
                    <SvgIcon className='stroke-icon' iconId='stroke-home'/>
                  </Link>
                </BreadcrumbItem>
                {parent !== '' && <BreadcrumbItem>{parent}</BreadcrumbItem>}
                <BreadcrumbItem active>{title}</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
      </Container>
  );
};
export default Breadcrumbs;
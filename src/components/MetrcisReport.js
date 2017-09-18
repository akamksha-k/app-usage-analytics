import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChartLine } from '../components/Chart/ChartLine';
import { ChartDoughnut } from '../components/Chart/ChartDoughnut';
import { ChartDoughnut2 } from '../components/Chart/ChartDoughnut2';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { fetchProtocol } from '../actions/protocol/protocol';
import ExpansionList from 'react-md/lib/ExpansionPanels/ExpansionList';
import ExpansionPanel from 'react-md/lib/ExpansionPanels/ExpansionPanel';
import DownloadIcon from '../assets/images/DownloadIcon.PNG';
import Add from '../assets/images/Add.PNG';
import Edit from '../assets/images/Edit.PNG';

export class MetrcisReport extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch, match } = this.props;

    dispatch(fetchProtocol(match.params.id, 'True'));
  }
  displayTitle(title) {
    let displayTitle = '';
    if (title && title.length > 0) {
      if (title.length <= 32) {
        displayTitle = title;
      } else {
        for (var i = 0; i < 30; i++) {
          displayTitle += title[i];
        }
        displayTitle += '...';
      }
    }
    return displayTitle;
  }

  render() {
    let protocol = this.props.protocol;
    const ProtocolSections =
      this.props.protocol && this.props.protocol.ProtocolSections
        ? this.props.protocol.ProtocolSections.map(
            (x, index) =>
              index === 0
                ? <ExpansionPanel
                    label={
                      this.props.protocol.ProtocolSections[index].number +
                      '.' +
                      this.displayTitle(
                        this.props.protocol.ProtocolSections[index].title
                      )
                    }
                    key={`active${index}`}
                    defaultExpanded={true}
                    title={this.props.protocol.ProtocolSections[index].title}
                  >
                    <div className="MetricTable">
                      <table>
                        <tbody>
                          <tr>
                            <th>In Progress</th>
                            <th>0 Comments</th>
                            <th>276 Words</th>
                          </tr>
                        </tbody>
                      </table>
                      <ExpansionPanel label="This Week" defaultExpanded>
                        <table>
                          <tbody>
                            <tr>
                              <th>
                                {' '}<img
                                  id="AddEdit"
                                  className="AddEdit"
                                  src={Add}
                                  alt="Add Icon"
                                />
                              </th>
                              <th rowSpan="2">
                                Dr. Sally spock added content in Rationale
                                ,Safety Objective and Secondary Endpoint Fields
                              </th>
                            </tr>
                          </tbody>
                        </table>

                        <table>
                          <tbody>
                            <tr>
                              <th>
                                {' '}<img
                                  id="AddEdit"
                                  className="AddEdit"
                                  src={Edit}
                                  alt=" Edit Icon"
                                />{' '}
                              </th>
                              <th rowSpan="2">
                                Dr. Sally Spock added content in Secondary
                                Objective Fields.
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </ExpansionPanel>
                      <ExpansionPanel label="Last Week" defaultExpanded>
                        <table>
                          <tbody>
                            <tr>
                              <th>
                                {' '}<img
                                  id="AddEdit"
                                  className="AddEdit"
                                  src={Edit}
                                  alt=" Edit Icon"
                                />
                              </th>
                              <th rowSpan="2">
                                Max wade edited the Safety Endpoint Field.{' '}
                              </th>
                            </tr>
                          </tbody>
                        </table>

                        <table>
                          <tbody>
                            <tr>
                              <th>
                                {' '}<img
                                  id="AddEdit"
                                  className="AddEdit"
                                  src={Add}
                                  alt="Add Icon"
                                />{' '}
                              </th>
                              <th rowSpan="2">
                                Dr. Sally Spock added content to the Safety
                                Endpoint Fields.
                              </th>
                            </tr>
                          </tbody>
                        </table>

                        <table>
                          <tbody>
                            <tr>
                              <th>
                                {' '}<img
                                  id="AddEdit"
                                  className="AddEdit"
                                  src={Add}
                                  alt="Add  Icon"
                                />{' '}
                              </th>
                              <th rowSpan="2">
                                Dr. Sally Spock added content in Secondary
                                Objective Fields.
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </ExpansionPanel>
                      <ExpansionPanel label="2 Weeks ago" />
                      <ExpansionPanel label="Last month" />
                      <ExpansionPanel label="Last year" />
                    </div>
                  </ExpansionPanel>
                : <ExpansionPanel
                    label={
                      this.props.protocol.ProtocolSections[index].number +
                      '.' +
                      this.displayTitle(
                        this.props.protocol.ProtocolSections[index].title
                      )
                    }
                    key={`active${index}`}
                    title={this.props.protocol.ProtocolSections[index].title}
                  />
          )
        : <ExpansionPanel label="" key="0">
            label= "" key=0
          </ExpansionPanel>;

    return (
      <div className="Metric">
        <h2 className="protocol_title">
          Metrics Of {protocol ? this.displayTitle(protocol.studyNickName) : ''}
          <img
            id="DownloadIcon"
            className="DownloadIcon"
            src={DownloadIcon}
            alt="Download Icon"
          />
          <br />
        </h2>
        <h3>
          Project Document - 11 Sections <br />
          <div className="graph-text">
            <div className="graph-text-complete">3 Complete</div>
            <div className="graph-text-review">1 In Review</div>
            <div className="graph-text-progress">5 In Progress</div>
            <div className="graph-text-notstarted">2 Not Started</div>
          </div>
          <div className="line-chart-height">
            <div className="line-Chart-complete" />
            <div className="line-Chart-black" />
            <div className="line-Chart-complete" />
            <div className="line-Chart-black" />
            <div className="line-Chart-complete" />
            <div className="circle" />
            <div className="line-Chart-review" />
            <div className="circle" />
            <div className="line-Chart-progress" />
            <div className="line-Chart-black" />
            <div className="line-Chart-progress" />
            <div className="line-Chart-black" />
            <div className="line-Chart-progress" />
            <div className="line-Chart-black" />
            <div className="line-Chart-progress" />
            <div className="line-Chart-black" />
            <div className="line-Chart-progress" />
            <div className="circle" />
            <div className="line-Chart-notstarted" />
            <div className="line-Chart-black" />
            <div className="line-Chart-notstarted" />
          </div>
          <br />
          Section Status
        </h3>
        <div className="Leftpanel">
          <ExpansionList style={{ padding: 16, outerWidth: 50 }}>
            {ProtocolSections}
          </ExpansionList>
        </div>

        <div className="Report">
          <h2>Document Activity</h2>
          <select className="LineChartDropdown">
            <option value="Weekly">Weekly</option>
          </select>
          <ChartLine /> <br />
          <div className="ChartDoughnut">
            <h2>Author's Progress</h2>
            <h3>Dr. Sally Spock - 8 Sections Assigned</h3>
            <div className="hoursClass"> 17 Hours Spent Writing </div>
            <ChartDoughnut />
            <br />
            <h3>Max Wade - 7 Sections Assigned</h3>
            <div className="hoursClass"> 13.5 Hours Spent Writing </div>
            <ChartDoughnut2 />
          </div>
        </div>
      </div>
    );
  }
}

MetrcisReport.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  //match: PropTypes.object.isRequired,
  protocol: PropTypes.object,
  statusMessage: PropTypes.string,
  session: PropTypes.object,
  users: PropTypes.arrayOf(PropTypes.object),
};

function mapStateToProps(state) {
  return {
    protocol: state.protocolReducer.protocol,
    statusMessage: state.protocolReducer.statusMessage,
    session: state.session,
    users: state.userReducer.users,
  };
}

export default withRouter(connect(mapStateToProps)(MetrcisReport));

import { connect } from "react-redux";
import SignUp from "./../components/signup";
import { signUpAction } from "../actions";

const mapStateToProps = (state, props) => {
  console.log(state);
  return state.signup;
};

const mapDispatchToProps = dispatch => ({
  signUpAction: values => dispatch(signUpAction(values))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

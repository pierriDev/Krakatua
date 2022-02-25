import Attach from './svgs/Attach';
import Camera from './svgs/Camera';
import Card from './svgs/Card';
import ChevronDown from './svgs/ChevronDown';
import ChevronLeft from './svgs/ChevronLeft';
import ChevronRight from './svgs/ChevronRight';
import Circle from './svgs/Circle';
import Close from './svgs/Close';
import Copy from './svgs/Copy';
import CreditCard from './svgs/CreditCard';
import Error from './svgs/Error';
import FileQuestion from './svgs/FileQuestion';
import HidePassword from './svgs/HidePassword';
import Home from './svgs/Home';
import HomeActive from './svgs/HomeActive';
import Information from './svgs/Information';
import InformationActive from './svgs/InformationActive';
import Logo from './svgs/Logo';
import Pay from './svgs/Pay';
import PayActive from './svgs/PayActive';
import Question from './svgs/Question';
import QuestionActive from './svgs/QuestionActive';
import RadioButton from './svgs/RadioButton';
import RadioButtonUnchecked from './svgs/RadioButtonUnchecked';
import Share from './svgs/Share';
import ShowPassword from './svgs/ShowPassword';
import Star from './svgs/Star';
import Trash from './svgs/Trash';
import UserSettings from './svgs/UserSettings';
import UserSettingsActive from './svgs/UserSettingsActive';
import Warning from './svgs/Warning';
import WarningRound from './svgs/WarningRound';
import type {NameType} from './types';

const IconMap = {
  Home,
  HomeActive,
  UserSettings,
  UserSettingsActive,
  Information,
  InformationActive,
  Logo,
  Star,
  Attach,
  Camera,
  Card,
  CreditCard,
  Close,
  Copy,
  Error,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FileQuestion,
  Pay,
  PayActive,
  Question,
  QuestionActive,
  RadioButton,
  RadioButtonUnchecked,
  Circle,
  Warning,
  WarningRound,
  HidePassword,
  ShowPassword,
  Share,
  Trash,
};

export const iconNames = Object.keys(IconMap);

// @ts-ignore
export const getIcon = (name: NameType) => IconMap[name];

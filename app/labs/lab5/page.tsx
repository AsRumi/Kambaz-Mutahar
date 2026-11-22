import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithRemoteObjectsAsynchronously from "./WorkingWithRemoteObjectsAsync";
import WorkingWithRemoteArraysAsynchronously from "./WorkingWithRemoteArraysAsync";
import HelloRoute from "./HelloRoute";
import CalculatorNextWebApiClient from "./Calculator";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithRemoteObjectsAsynchronously />
      <WorkingWithRemoteArraysAsynchronously />
      <HelloRoute />
      <CalculatorNextWebApiClient />
    </div>
  );
}

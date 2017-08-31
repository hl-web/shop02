import { Injectable } from '@angular/core';


export class TokenManagerService {

  private tokenKey: string = 'token';

  private store(content: Object) {
    localStorage.setItem(this.tokenKey, JSON.stringify(content));
  }

  private retrieve() {
    let storedToken: string = localStorage.getItem(this.tokenKey);
    if (!storedToken) throw 'no token found';
    return storedToken;
  }

  public generateNewToken(token) {
    let currentTime: number = (new Date()).getTime();
    this.store({ ttl: currentTime, token });
  }

  public retrieveToken() {

    let currentTime: number = (new Date()).getTime(), token = null;
    try {
      let storedToken = JSON.parse(this.retrieve());
      if (storedToken.ttl < (currentTime - (120 * 1000))) throw 'invalid token found';
      token = storedToken.token;
    }
    catch (err) {
      console.error(err);
    }
    return token;

  }

}
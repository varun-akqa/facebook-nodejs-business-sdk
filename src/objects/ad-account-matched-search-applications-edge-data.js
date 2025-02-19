/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * AdAccountMatchedSearchApplicationsEdgeData
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdAccountMatchedSearchApplicationsEdgeData extends AbstractCrudObject {
  static get Fields (): Object {
    return Object.freeze({
      app_id: 'app_id',
      are_app_events_unavailable: 'are_app_events_unavailable',
      icon_url: 'icon_url',
      name: 'name',
      search_source_store: 'search_source_store',
      store: 'store',
      unique_id: 'unique_id',
      url: 'url',
    });
  }

  static get AppStore (): Object {
    return Object.freeze({
      amazon_app_store: 'AMAZON_APP_STORE',
      apk_mirror: 'APK_MIRROR',
      apk_monk: 'APK_MONK',
      apk_pure: 'APK_PURE',
      aptoide_a1_store: 'APTOIDE_A1_STORE',
      bemobi_mobile_store: 'BEMOBI_MOBILE_STORE',
      does_not_exist: 'DOES_NOT_EXIST',
      fb_android_store: 'FB_ANDROID_STORE',
      fb_canvas: 'FB_CANVAS',
      fb_gameroom: 'FB_GAMEROOM',
      galaxy_store: 'GALAXY_STORE',
      google_play: 'GOOGLE_PLAY',
      instant_game: 'INSTANT_GAME',
      itunes: 'ITUNES',
      itunes_ipad: 'ITUNES_IPAD',
      oculus_app_store: 'OCULUS_APP_STORE',
      oppo: 'OPPO',
      roku_store: 'ROKU_STORE',
      uptodown: 'UPTODOWN',
      vivo: 'VIVO',
      windows_10_store: 'WINDOWS_10_STORE',
      windows_store: 'WINDOWS_STORE',
      xiaomi: 'XIAOMI',
    });
  }
}

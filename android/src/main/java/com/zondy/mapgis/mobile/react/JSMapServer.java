package com.zondy.mapgis.mobile.react;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.zondy.mapgis.core.geometry.Rect;
import com.zondy.mapgis.core.map.MapServer;
import com.zondy.mapgis.core.srs.SRefData;

import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * 地图服务对象Native功能组件
 * Created by xiaoying on 2019/9/2.
 */
public class JSMapServer extends ReactContextBaseJavaModule {
    private static final String REACT_CLASS = "JSMapServer";
    public static Map<String, MapServer> mMapServerList = new HashMap<>();



    public JSMapServer(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        return super.getConstants();
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    public static MapServer getObjFromList(String id){
        return mMapServerList.get(id);
    }

    public static String registerId(MapServer obj){
        for(Map.Entry entry : mMapServerList.entrySet()){
            if(obj.equals(entry.getValue())){
                String id = (String) entry.getKey();
                return id;
            }
        }
        Calendar calendar = Calendar.getInstance();
        String id = Long.toString(calendar.getTimeInMillis());
        mMapServerList.put(id,obj);
        return id;
    }

    @ReactMethod
    public void createObj(Promise promise){
        try {
            MapServer mapServer = new MapServer();
            String mapServerId = registerId(mapServer);

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("MapServerId",mapServerId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getType(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String type = mapServer.getType();
            promise.resolve(type);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getMapBrowseType(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int mapBrowserType = mapServer.getMapBrowseType().value();
            promise.resolve(mapBrowserType);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setName(String mapServerId, String name, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            mapServer.setName(name);
            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getName(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String name = mapServer.getName();
            promise.resolve(name);

        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setURL(String mapServerId, String URL, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            mapServer.setURL(URL);
            promise.resolve(true);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getURL(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String url = mapServer.getURL();
            promise.resolve(url);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void connectData(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int result = (int) mapServer.connectData();
            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getIsValid(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            boolean isValid = mapServer.getIsValid();
            promise.resolve(isValid);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getSRS(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            SRefData sRefData = mapServer.getSRS();

            String sRefDataId = "";
            if(sRefData != null){
                sRefDataId = JSSRefData.registerId(sRefData);
            }

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("SRefDataId",sRefDataId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getEntireExtent(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            Rect rect = mapServer.getEntireExtent();

            String rectId = "";
            if (rect != null){
                rectId = JSRect.registerId(rect);
            }

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("RectId", rectId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getMapServerCount(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int mapServerCount = mapServer.getMapServerCount();
            promise.resolve(mapServerCount);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getMapServer(String mapServerId, int index, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String desServerId = registerId(mapServer);

            WritableMap writableMap = Arguments.createMap();
            writableMap.putString("MapServerId", desServerId);
            promise.resolve(writableMap);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setCopyright(String mapServerId, String strCopyright, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int result = (int) mapServer.setCopyright(strCopyright);
            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getCopyright(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String copyRight = mapServer.getCopyright();
            promise.resolve(copyRight);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setAuthentication(String mapServerId, String strUser, String strPwd, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int result = (int) mapServer.setAuthentication(strUser,strPwd);
            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getAuthenticUser(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String authenticUser = mapServer.getAuthenticUser();
            promise.resolve(authenticUser);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getAuthenticPassword(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String authenticPassword = mapServer.getAuthenticPassword();
            promise.resolve(authenticPassword);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getVersionCount(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int versionCount = mapServer.getVersionCount();
            promise.resolve(versionCount);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getVersion(String mapServerId, int index, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String version = mapServer.getVersion(index);
            promise.resolve(version);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void setCurrentVersion(String mapServerId, String strVersion, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            int result = (int) mapServer.setCurrentVersion(strVersion);
            promise.resolve(result);
        }catch (Exception e){
            promise.reject(e);
        }
    }

    @ReactMethod
    public void getCurrentVersion(String mapServerId, Promise promise){
        try {
            MapServer mapServer = getObjFromList(mapServerId);
            String currentVersion = mapServer.getCurrentVersion();
            promise.resolve(currentVersion);
        }catch (Exception e){
            promise.reject(e);
        }
    }
}

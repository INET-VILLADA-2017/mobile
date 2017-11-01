package com.inet2017;

import android.widget.LinearLayout;
import android.graphics.Color;
import android.widget.TextView;
import android.view.Gravity;
import android.util.TypedValue;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
    @Override
        public LinearLayout createSplashLayout() {
            LinearLayout view = new LinearLayout(this);
            TextView textView = new TextView(this);

            view.setBackgroundColor(Color.parseColor("#4caf50"));
            view.setGravity(Gravity.CENTER);

            textView.setTextColor(Color.parseColor("#FFFFFF"));
            textView.setText("Splash... So refreshing");
            textView.setGravity(Gravity.CENTER);
            textView.setTextSize(TypedValue.COMPLEX_UNIT_DIP, 40);

            view.addView(textView);
            return view;
        }
}
